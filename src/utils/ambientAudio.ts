import type { SoundTrack } from '../data/profileData';

class AmbientSoundscapeEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private rainNode: AudioNode | null = null;
  private rainGain: GainNode | null = null;
  private chordTimer: number | null = null;
  private activeOscillators: OscillatorNode[] = [];
  private isPlaying = false;
  private volume = 0.45;

  private ensureContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = this.volume;
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      void this.ctx.resume();
    }
    return this.ctx;
  }

  public setVolume(nextVolume: number): void {
    this.volume = Math.max(0, Math.min(1, nextVolume));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.08);
    }
  }

  public startTrack(track: SoundTrack): void {
    this.stop();
    const ctx = this.ensureContext();
    if (!this.masterGain) return;

    this.isPlaying = true;

    if (track.hasRainTexture) {
      this.startSoftRain(ctx, this.masterGain);
    }

    let stepIndex = 0;
    const playStep = () => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;
      const chord = track.chords[stepIndex % track.chords.length];
      this.triggerWarmChord(this.ctx, this.masterGain, chord, 4.2);
      stepIndex += 1;
    };

    playStep();
    this.chordTimer = window.setInterval(playStep, 4200);
  }

  private triggerWarmChord(
    ctx: AudioContext,
    destination: AudioNode,
    frequencies: number[],
    durationSec: number
  ): void {
    const now = ctx.currentTime;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(920, now);
    filter.frequency.exponentialRampToValueAtTime(480, now + durationSec);
    filter.connect(destination);

    frequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();

      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.06);

      const peakGain = idx === 0 ? 0.11 : 0.065;
      noteGain.gain.setValueAtTime(0.0001, now);
      noteGain.gain.linearRampToValueAtTime(peakGain, now + 0.65 + idx * 0.05);
      noteGain.gain.exponentialRampToValueAtTime(0.0008, now + durationSec);

      osc.connect(noteGain);
      noteGain.connect(filter);

      osc.start(now + idx * 0.05);
      osc.stop(now + durationSec + 0.1);

      this.activeOscillators.push(osc);
      osc.onended = () => {
        this.activeOscillators = this.activeOscillators.filter((item) => item !== osc);
      };
    });
  }

  private startSoftRain(ctx: AudioContext, destination: AudioNode): void {
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = buffer.getChannelData(0);
    let b0 = 0;
    let b1 = 0;
    let b2 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99765 * b0 + white * 0.099046;
      b1 = 0.963 * b1 + white * 0.2965164;
      b2 = 0.57 * b2 + white * 1.0526913;
      output[i] = (b0 + b1 + b2 + white * 0.1848) * 0.035;
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = buffer;
    whiteNoise.loop = true;

    const bandpass = ctx.createBiquadFilter();
    bandpass.type = 'lowpass';
    bandpass.frequency.value = 780;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 1.2);

    whiteNoise.connect(bandpass);
    bandpass.connect(gain);
    gain.connect(destination);

    whiteNoise.start();
    this.rainNode = whiteNoise;
    this.rainGain = gain;
  }

  public stop(): void {
    this.isPlaying = false;
    if (this.chordTimer !== null) {
      window.clearInterval(this.chordTimer);
      this.chordTimer = null;
    }
    this.activeOscillators.forEach((osc) => {
      try {
        osc.stop();
      } catch {
        // oscillator already ended
      }
    });
    this.activeOscillators = [];

    if (this.rainNode) {
      try {
        (this.rainNode as AudioBufferSourceNode).stop();
      } catch {
        // source already stopped
      }
      this.rainNode.disconnect();
      this.rainNode = null;
    }
    if (this.rainGain) {
      this.rainGain.disconnect();
      this.rainGain = null;
    }
  }
}

export const ambientEngine = new AmbientSoundscapeEngine();
