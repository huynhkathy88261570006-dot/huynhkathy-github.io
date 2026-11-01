import storeInteriorImg from '../assets/images/store_interior_counter_1793464395427.jpg';
import uehWeekendStudyImg from '../assets/images/ueh_mekong_weekend_study_1793464370043.jpg';
import readingSanctuaryImg from '../assets/images/reading_music_solitude_1793464370657.jpg';
import dongThapLotusImg from '../assets/images/dong_thap_lotus_landscape_1793464371054.jpg';

export interface QuickPrompt {
  id: string;
  label: string;
  summaryTitle: string;
  answer: string;
  targetSection: string;
}

export interface WeeklyPhase {
  id: 'weekdays' | 'weekends' | 'evenings';
  label: string;
  scheduleTag: string;
  headline: string;
  description: string;
  imageUrl: string;
  imageCaption: string;
  highlights: string[];
}

export interface PersonalTrait {
  index: string;
  title: string;
  detail: string;
}

export interface WorkStudyItem {
  id: string;
  category: 'business' | 'academic';
  categoryLabel: string;
  index: string;
  title: string;
  subtitle: string;
  period: string;
  imageUrl: string;
  summary: string;
  metricsLabel: string;
  details: string[];
  reflection: string;
}

export interface LifeMoment {
  id: string;
  title: string;
  tag: string;
  location: string;
  scheduleNote: string;
  caption: string;
  story: string;
  imageUrl: string;
  featured?: boolean;
}

export interface BookNote {
  id: string;
  title: string;
  author: string;
  theme: string;
  yearNote: string;
  favoriteQuote: string;
  personalTakeaway: string;
}

export interface SoundTrack {
  id: string;
  title: string;
  mood: string;
  tempoLabel: string;
  description: string;
  chords: number[][];
  hasRainTexture: boolean;
}

export interface CoreValue {
  index: string;
  titleVi: string;
  subtitle: string;
  description: string;
}

export interface CourseVideoChapter {
  id: string;
  timeSeconds: number;
  timeLabel: string;
  title: string;
  excerpt: string;
}

export const VISUAL_ASSETS = {
  portrait: '/assets/aistudio/image_deb8d92d.png',
  reflectionVideo: '/assets/aistudio/Untitled_video__1__94ecdafa.mp4',
  storeInterior: storeInteriorImg,
  uehWeekendStudy: uehWeekendStudyImg,
  readingSanctuary: readingSanctuaryImg,
  dongThapLotus: dongThapLotusImg,
};

export const COURSE_VIDEO_REFLECTION = {
  videoUrl: '/assets/aistudio/Untitled_video__1__94ecdafa.mp4',
  durationLabel: '00:56',
  heading:
    'Góc chia sẻ cảm nhận từ buổi học chiến lược marketing đầu tiên tại UEH Mekong với thầy Nguyễn Phương Nam',
  subheading:
    'Đoạn video ngắn lưu lại ấn tượng chân thật của mình về người thầy tận tâm — thầy Nguyễn Phương Nam, những giờ học tối chiến lược marketing đầy năng lượng và kho tài liệu bài giảng đặc biệt.',
  chapters: [
    {
      id: 'chapter-intro',
      timeSeconds: 0,
      timeLabel: '00:00',
      title: 'Sự thân thiện, cởi mở & cơ hội kết nối cả lớp',
      excerpt:
        'Đây là lần đầu tiên em được học thầy. Thầy mang đến cho em ấn tượng về một người rất thân thiện, cởi mở và nhiệt tình. Việc thầy tạo cơ hội cho từng thành viên giới thiệu bản thân không chỉ giúp buổi học trở nên gần gũi hơn mà còn giúp em hiểu và kết nối với các bạn trong lớp.',
    },
    {
      id: 'chapter-evening',
      timeSeconds: 14,
      timeLabel: '00:14',
      title: 'Tan học gần 9 giờ tối nhưng vẫn tràn đầy cuốn hút',
      excerpt:
        'Đây cũng là môn học đầu tiên khiến em gần chín giờ tối mới được tan học. Tuy nhiên, em không cảm thấy quá mệt mỏi bởi sự nhiệt huyết của thầy, cùng giọng nói hùng hồn và những câu chuyện thực tế, thú vị khiến buổi học luôn cuốn hút.',
    },
    {
      id: 'chapter-dapxe',
      timeSeconds: 27,
      timeLabel: '00:27',
      title: 'Ấn tượng về website riêng & kho tài liệu dapxe.info/tailieu',
      excerpt:
        'Một điều khác khiến em khá ấn tượng là thầy có hẳn một website riêng để giới thiệu về bản thân, giúp sinh viên hiểu thêm về con người và hành trình của thầy. Đặc biệt, thầy còn xây dựng trang tài liệu bài giảng tại địa chỉ dapxe.info/tailieu, tạo điều kiện thuận lợi cho sinh viên truy cập và tìm kiếm tài liệu. Điều thú vị là cái tên "đạp xe" ban đầu khiến em nghĩ đây là một website về thể thao, nhưng khi mở ra lại là cả một kho tài liệu học tập hữu ích. Với em, đây là một cách làm rất sáng tạo, gần gũi và thể hiện sự tận tâm của thầy trong việc đồng hành cùng sinh viên.',
    },
  ] as CourseVideoChapter[],
};

export const PROFILE_INFO = {
  fullName: 'Kathy Mỹ Ngọc Huỳnh',
  vietnameseName: 'Huỳnh Mỹ Ngọc (Kathy)',
  studentId: '88261570006',
  birthYear: '2003',
  hometown: 'Đồng Tháp · Đất Sen Hồng',
  university: 'UEH Mekong — Phân hiệu Đại học Kinh tế TP. Hồ Chí Minh',
  program: 'Chương trình Vừa Làm Vừa Học (VLVH)',
  currentWork: 'Chủ một cửa hàng tạp hóa tại Đồng Tháp',
  weeklyScheduleSummary: 'Thứ 2 – Thứ 6 buôn bán · Thứ 7 – Chủ nhật đi học',
  hobbiesSummary: 'Đọc sách · Nghe nhạc · Ở một mình',
  portraitPath: '/assets/aistudio/image_deb8d92d.png',
  contactEmail: 'huynhkathy.88261570006@st.ueh.edu.vn',
  locationDetail: 'Đồng Tháp & Vĩnh Long (UEH Mekong)',
  openingGreeting:
    'Xin chào, mình là Kathy Mỹ Ngọc Huỳnh — sinh năm 2003, quê ở Đồng Tháp. Mình hiện có một cửa hàng tạp hóa tại nhà và đồng thời là sinh viên hệ Vừa Làm Vừa Học tại UEH Mekong.',
  openingSubtext:
    'Một tuần của mình chia làm hai nhịp rất rõ ràng: từ Thứ Hai đến Thứ Sáu gắn bó với quầy kệ, sổ sách và bà con ghé mua hàng; Thứ Bảy và Chủ Nhật lại xách balo đến giảng đường đại học. Còn những buổi tối yên ắng nhất luôn dành cho sách, âm nhạc và khoảng trời riêng một mình.',
};

export const HERO_METRICS = [
  {
    value: '2003',
    label: 'Năm sinh · Quê Đồng Tháp',
    detail: 'Lớn lên giữa miền Tây chân thành, mộc mạc',
  },
  {
    value: 'Thứ 2 – Thứ 6',
    label: 'Buôn bán tại cửa hàng tạp hóa',
    detail: 'Tự tay sắp xếp hàng hóa, sổ sách & đón khách',
  },
  {
    value: 'Thứ 7 – CN',
    label: 'Đi học VLVH tại UEH Mekong',
    detail: 'Cuối tuần trau dồi kiến thức kinh tế & quản trị',
  },
  {
    value: '03 Góc riêng',
    label: 'Đọc sách · Nghe nhạc · Ở một mình',
    detail: 'Khoảng lặng nạp lại năng lượng nội tâm mỗi tối',
  },
];

export const QUICK_PROMPTS: QuickPrompt[] = [
  {
    id: 'video-reflection',
    label: 'Video cảm nhận môn học',
    summaryTitle:
      'Góc chia sẻ cảm nhận từ buổi học chiến lược marketing đầu tiên tại UEH Mekong với thầy Nguyễn Phương Nam',
    answer:
      'Xem video Kathy trực tiếp chia sẻ cảm nhận về buổi học chiến lược marketing đầu tiên với thầy Nguyễn Phương Nam kéo dài đến gần 9 giờ tối đầy cuốn hút và ấn tượng thú vị về kho bài giảng dapxe.info/tailieu.',
    targetSection: 'course-reflection',
  },
  {
    id: 'store',
    label: 'Cửa hàng tạp hóa T2 – T6',
    summaryTitle: 'Từ Thứ Hai đến Thứ Sáu: Chăm chút cửa hàng tạp hóa nhỏ thân thương',
    answer:
      'Mình có một cửa hàng tạp hóa tại quê nhà Đồng Tháp. Năm ngày trong tuần, mình trực tiếp mở cửa từ sớm, kiểm hàng, ghi sổ thu chi và trò chuyện cùng những vị khách quen trong xóm.',
    targetSection: 'work-study',
  },
  {
    id: 'ueh',
    label: 'Lịch học T7 – CN ở UEH Mekong',
    summaryTitle: 'Thứ Bảy & Chủ Nhật: Trở lại vai trò sinh viên UEH Mekong',
    answer:
      'Cuối tuần khi nhiều người nghỉ ngơi thì mình chuẩn bị giáo trình đến lớp hệ Vừa Làm Vừa Học tại UEH Mekong. Những bài học kinh tế giúp mình nhìn công việc buôn bán hàng ngày rõ ràng và bài bản hơn.',
    targetSection: 'work-study',
  },
  {
    id: 'sanctuary',
    label: 'Đọc sách, nghe nhạc & ở một mình',
    summaryTitle: 'Người hướng nội tìm thấy bình yên trong căn phòng yên tĩnh',
    answer:
      'Giao tiếp cả ngày ở cửa hàng khiến mình càng trân quý những giờ ở một mình vào buổi tối: pha một tách trà ấm, bật bản nhạc nhẹ và đọc vài chương sách yêu thích.',
    targetSection: 'sanctuary',
  },
];

export const WEEKLY_PHASES: WeeklyPhase[] = [
  {
    id: 'weekdays',
    label: 'Thứ 2 – Thứ 6 · Buôn bán tại tiệm',
    scheduleTag: 'Thứ Hai đến Thứ Sáu · 06:30 – 18:30',
    headline: 'Năm ngày trong tuần gắn bó cùng cửa hàng tạp hóa ở Đồng Tháp',
    description:
      'Tôi có một cửa hàng tạp hóa tại nhà — nơi mỗi buổi sáng bắt đầu bằng tiếng kéo cửa quen thuộc, mùi trà khô thơm nhẹ và những lời hỏi thăm thân tình của cô chú hàng xóm. Từ Thứ Hai đến Thứ Sáu, mình tự tay quán xuyến từ khâu nhận hàng, xếp kệ cho đến cộng sổ cuối ngày.',
    imageUrl: storeInteriorImg,
    imageCaption: 'Góc quầy hàng mộc mạc và cuốn sổ ghi chép tay đồng hành từ Thứ Hai đến Thứ Sáu.',
    highlights: [
      'Sắp xếp các kệ gia vị, bánh kẹo, trà, nhu yếu phẩm gọn gàng để khách nhìn là thấy ngay món cần mua',
      'Ghi nhớ thói quen nhỏ của khách quen trong xóm — ai thích loại trà nào, nhà ai hay mua thêm gia vị gì',
      'Chốt sổ thu chi, kiểm tra các mặt hàng sắp hết vào chiều Thứ Sáu để chuẩn bị yên tâm đi học cuối tuần',
    ],
  },
  {
    id: 'weekends',
    label: 'Thứ 7 – Chủ Nhật · Đi học UEH Mekong',
    scheduleTag: 'Thứ Bảy & Chủ Nhật · Cả ngày trên giảng đường',
    headline: 'Cuối tuần gác lại việc buôn bán để làm sinh viên VLVH tại UEH Mekong',
    description:
      'Đều đặn mỗi sáng Thứ Bảy và Chủ Nhật, mình đổi từ không khí quầy tạp hóa sang bàn học đại học tại UEH Mekong. Dù lịch trình kín cả 7 ngày trong tuần đôi lúc khá bận, cảm giác được ngồi nghe giảng, ghi chép và trao đổi cùng thầy cô, bạn học luôn mang lại cho mình nguồn động lực mới mẻ.',
    imageUrl: uehWeekendStudyImg,
    imageCaption: 'Bàn học sáng cuối tuần với giáo trình kinh tế, cuốn vở ghi chép và ly cà phê sữa đá.',
    highlights: [
      'Theo học các học phần kinh tế, marketing và quản trị trong chương trình Vừa Làm Vừa Học (MSSV: 88261570006)',
      'Hoàn thành bài tập nhóm, thuyết trình và ôn bài tranh thủ vào các buổi tối trong tuần',
      'Áp dụng ngay cách tính toán chi phí, quản lý tồn kho học được trên lớp vào chính cửa hàng tạp hóa của mình',
    ],
  },
  {
    id: 'evenings',
    label: 'Buổi tối · Sách, Nhạc & Ở một mình',
    scheduleTag: 'Mỗi tối · 20:30 – 23:00',
    headline: 'Khoảng nghỉ tĩnh lặng dành riêng cho bản thân sau một ngày trọn vẹn',
    description:
      'Sau năm ngày đứng tiệm và hai ngày cuối tuần trên lớp, điều giữ cho mình không bao giờ kiệt sức chính là những buổi tối được ở một mình. Không cần đi đâu xa, chỉ cần bật chiếc đèn bàn ánh vàng, mở một danh sách nhạc êm dịu và đọc tiếp cuốn sách đang đánh dấu dở.',
    imageUrl: readingSanctuaryImg,
    imageCaption: 'Góc bàn nhỏ bên khung cửa sổ — nơi có sách, tai nghe và sự yên tĩnh trọn vẹn.',
    highlights: [
      'Đọc tản văn miền Tây, sách tâm lý hướng nội hoặc những câu chuyện kinh doanh gần gũi',
      'Nghe nhạc Indie nhẹ nhàng, Acoustic hoặc hòa tấu tiếng mưa để tâm trí lắng lại',
      'Tắt bớt thông báo mạng xã hội, tận hưởng trọn vẹn sự tự do và bình yên khi ở một mình',
    ],
  },
];

export const PERSONAL_TRAITS: PersonalTrait[] = [
  {
    index: '01',
    title: 'Thói quen hai cuốn sổ tay',
    detail:
      'Mình luôn dùng hai cuốn sổ riêng: một cuốn đặt ngay bàn tính tiền để ghi hàng nhập – xuất từ Thứ 2 đến Thứ 6, và một cuốn mang theo đến lớp UEH Mekong mỗi dịp Thứ 7, Chủ Nhật.',
  },
  {
    index: '02',
    title: 'Niềm nở ngoài quầy, trầm tĩnh trong phòng',
    detail:
      'Nhiều người bất ngờ khi biết mình rất thích ở một mình, vì lúc bán hàng mình luôn vui vẻ trò chuyện. Thật ra chính khoảng lặng buổi tối giúp mình có đủ năng lượng tích cực cho ngày hôm sau.',
  },
  {
    index: '03',
    title: 'Hương vị quen thuộc của đất Sen Hồng',
    detail:
      'Sinh ra ở Đồng Tháp năm 2003, mình mê mùi hương sen dịu nhẹ, thích uống trà ấm khi trời mưa và giữ lối sống giản dị, chân tình của người miền Tây.',
  },
  {
    index: '04',
    title: 'Tuần lễ 7 ngày không có khái niệm nhàm chán',
    detail:
      '5 ngày buôn bán thực tế cộng với 2 ngày cuối tuần đi học giúp mình vừa giữ được đôi chân vững vàng ngoài đời sống, vừa nuôi dưỡng ước mơ học tập lâu dài.',
  },
];

export const WORK_STUDY_ITEMS: WorkStudyItem[] = [
  {
    id: 'grocery-weekday-ops',
    category: 'business',
    categoryLabel: 'Thứ 2 – Thứ 6 · Cửa hàng tạp hóa',
    index: '01',
    title: 'Trông coi & Vận hành Cửa hàng Tạp hóa riêng tại Đồng Tháp',
    subtitle: 'Công việc chính từ Thứ Hai đến Thứ Sáu hàng tuần',
    period: 'Thứ 2 – Thứ 6 hàng tuần',
    imageUrl: storeInteriorImg,
    summary:
      'Mình có một cửa hàng tạp hóa phục vụ nhu cầu mua sắm hàng ngày của bà con xung quanh. Từ việc chọn nguồn hàng chất lượng, sắp xếp từng hũ gia vị, hộp trà cho đến quản lý thu chi đều do mình chăm chút đều đặn suốt 5 ngày trong tuần.',
    metricsLabel: 'Chăm chút từng kệ hàng · Phục vụ tận tâm',
    details: [
      'Chủ động kiểm tra hạn sử dụng và độ mới của sản phẩm mỗi sáng đầu tuần để khách luôn yên tâm khi mua.',
      'Sắp xếp không gian tiệm ngăn nắp, thoáng sáng để cả người lớn tuổi lẫn trẻ nhỏ trong xóm đều dễ tìm đồ.',
      'Chuẩn bị sẵn kế hoạch hàng hóa vào chiều Thứ Sáu để cửa hàng vẫn vận hành suôn sẻ những ngày mình đi học cuối tuần.',
    ],
    reflection:
      'Một cửa hàng tạp hóa tuy bình dị nhưng dạy mình bài học quý giá nhất về sự kiên nhẫn, chữ tín và cách lắng nghe nhu cầu thật của mọi người.',
  },
  {
    id: 'ueh-weekend-journey',
    category: 'academic',
    categoryLabel: 'Thứ 7 – Chủ Nhật · UEH Mekong',
    index: '02',
    title: 'Sinh viên Hệ Vừa Làm Vừa Học tại UEH Mekong',
    subtitle: 'Phân hiệu Đại học Kinh tế TP. Hồ Chí Minh',
    period: 'Thứ 7 & Chủ Nhật hàng tuần',
    imageUrl: uehWeekendStudyImg,
    summary:
      'Mỗi dịp cuối tuần, mình dành trọn Thứ Bảy và Chủ Nhật cho giảng đường UEH Mekong. Lựa chọn hệ Vừa Làm Vừa Học giúp mình vừa duy trì được cửa hàng tạp hóa riêng, vừa tiếp nhận kiến thức đại học chính통.',
    metricsLabel: 'MSSV: 88261570006 · Học đi đôi với làm',
    details: [
      'Tham gia đầy đủ các buổi học tập trung ngày Thứ Bảy và Chủ Nhật với tinh thần tự giác cao.',
      'Kết nối cùng các anh chị, bạn bè đồng môn hệ VLVH — những người cũng đang vừa đi làm vừa bền bỉ theo đuổi tri thức.',
      'Biến những câu chuyện thực tế từ cửa hàng tạp hóa ở Đồng Tháp thành ví dụ gần gũi trong các môn học kinh tế và quản trị.',
    ],
    reflection:
      'Đi học vào hai ngày cuối tuần đôi khi thấm mệt, nhưng mỗi lần bước qua cổng trường UEH Mekong, mình đều thấy tự hào vì bản thân đã không ngừng cố gắng.',
  },
  {
    id: 'local-customer-connection',
    category: 'business',
    categoryLabel: 'Tình người miền Tây · Đồng Tháp',
    index: '03',
    title: 'Giữ Nét Thân Tình Nơi Quầy Hàng Quê Nhà',
    subtitle: 'Bán hàng bằng sự chân thật và chu đáo',
    period: 'Gắn bó lâu dài tại Đồng Tháp',
    imageUrl: dongThapLotusImg,
    summary:
      'Ở quê hương Đồng Tháp, cửa hàng tạp hóa không chỉ là nơi trao đổi hàng hóa mà còn là điểm gặp gỡ quen thuộc mỗi sớm mai. Mình trân trọng từng nụ cười, lời dặn dò của khách quen ghé tiệm.',
    metricsLabel: 'Giá cả minh bạch · Gần gũi xóm giềng',
    details: [
      'Luôn giữ mức giá hợp lý, rõ ràng và tư vấn thật lòng sản phẩm phù hợp với túi tiền của từng gia đình.',
      'Lắng nghe góp ý của bà con để bổ sung thêm những mặt hàng thiết yếu mới mà xóm mình đang cần.',
      'Giữ trọn tác phong lễ phép, điềm đạm của thế hệ trẻ sinh năm 2003 lớn lên trên đất Sen Hồng.',
    ],
    reflection:
      'Khách quý mình vì cái tính thật thà, cẩn thận — đó là tài sản lớn nhất mà cửa hàng tạp hóa mang lại cho mình.',
  },
  {
    id: 'applying-knowledge-to-shop',
    category: 'academic',
    categoryLabel: 'Ứng dụng kiến thức · Tiệm & Trường',
    index: '04',
    title: 'Mang Tư Duy Quản Trị Vào Cửa Hàng Nhỏ Mỗi Ngày',
    subtitle: 'Sự giao thoa giữa lý thuyết UEH và thực tế buôn bán',
    period: 'Cải tiến từng bước nhỏ',
    imageUrl: readingSanctuaryImg,
    summary:
      'Nhờ những buổi học Thứ Bảy, Chủ Nhật tại UEH Mekong và thói quen đọc sách, mình biết cách ghi chép dòng tiền khoa học hơn, phân loại mặt hàng quay vòng nhanh và quản lý thời gian hiệu quả.',
    metricsLabel: 'Sổ sách rõ ràng · Cân bằng công việc & học tập',
    details: [
      'Tách bạch rõ ràng vốn nhập hàng, chi phí vận hành và khoản tích lũy cá nhân cho việc học đại học.',
      'Theo dõi mùa vụ mua sắm trong năm để nhập hàng vừa đủ, tránh tồn đọng vốn.',
      'Lập thời gian biểu tuần khoa học để không bị chồng chéo giữa mùa thi học kỳ và những đợt nhập hàng bận rộn.',
    ],
    reflection:
      'Khi vừa làm chủ công việc nhỏ của mình vừa đi học, mỗi trang giáo trình đều trở nên sống động và hữu ích lạ thường.',
  },
];

export const LIFE_MOMENTS: LifeMoment[] = [
  {
    id: 'moment-dong-thap',
    title: 'Hoàng hôn dịu dàng trên cánh đồng sen Đồng Tháp',
    tag: 'Quê hương 2003',
    location: 'Đồng Tháp · Đất Sen Hồng',
    scheduleNote: 'Nguồn cội bình yên',
    caption:
      'Nơi mình sinh ra và lớn lên — vùng đất của những mùa sen nở, dạy mình sống chậm rãi, chân tình và bền bỉ.',
    story:
      'Dù bận rộn với nhịp buôn bán từ Thứ Hai đến Thứ Sáu hay những chuyến đi học cuối tuần, hình ảnh mặt nước phẳng lặng và sắc sen hồng quê nhà luôn là điểm tựa tinh thần giúp mình giữ được sự hiền hòa trong tính cách.',
    imageUrl: dongThapLotusImg,
    featured: true,
  },
  {
    id: 'moment-weekday-store',
    title: 'Góc quầy tạp hóa & cuốn sổ tay Thứ Hai – Thứ Sáu',
    tag: 'Công việc thường nhật',
    location: 'Cửa hàng tạp hóa tại nhà',
    scheduleNote: 'Thứ 2 – Thứ 6',
    caption:
      'Chiếc bàn gỗ mộc, cuốn sổ ghi chép, chiếc máy tính tay và những kệ hàng ngay ngắn do chính tay mình sắp đặt.',
    story:
      'Mỗi sáng mở cửa đón nắng vào tiệm, pha một tách trà ấm rồi rà lại danh sách hàng hóa trong ngày — niềm vui lao động giản dị ấy đã nuôi dưỡng sự tự lập của mình suốt thời gian qua.',
    imageUrl: storeInteriorImg,
  },
  {
    id: 'moment-weekend-ueh',
    title: 'Sáng Thứ Bảy – Chủ Nhật trên giảng đường UEH Mekong',
    tag: 'Hành trình VLVH',
    location: 'UEH Mekong Campus',
    scheduleNote: 'Thứ 7 – Chủ Nhật',
    caption:
      'Chồng sách chuyên ngành kinh tế, cuốn vở ghi chép cẩn thận và ly cà phê sữa đá tỉnh táo cho ngày học cuối tuần.',
    story:
      'Đi học vào hai ngày cuối tuần là lựa chọn mình rất trân trọng. Ngồi bên khung cửa sổ nhìn hàng cây xanh của trường, mình thấy mọi nỗ lực sắp xếp công việc trong tuần đều hoàn toàn xứng đáng.',
    imageUrl: uehWeekendStudyImg,
  },
  {
    id: 'moment-night-solitude',
    title: 'Đèn vàng đêm mưa: Sách, tai nghe & khoảng trời một mình',
    tag: 'Góc riêng nội tâm',
    location: 'Phòng riêng của Kathy',
    scheduleNote: 'Mỗi buổi tối',
    caption:
      'Khoảnh khắc yêu thích nhất trong ngày: ngoài hiên mưa lất phất, bên trong là trang sách mở và bản nhạc êm.',
    story:
      'Mình không ngại ở một mình; ngược lại, mình tìm thấy sự tự do và sáng suốt nhất trong không gian tĩnh lặng ấy. Đọc vài trang sách hay, nghe một bản nhạc hợp gu là mọi mệt mỏi đều tan biến.',
    imageUrl: readingSanctuaryImg,
  },
];

export const BOOK_NOTES: BookNote[] = [
  {
    id: 'quiet-power',
    title: 'Sức mạnh của sự Tĩnh lặng (Quiet)',
    author: 'Susan Cain',
    theme: 'Thấu hiểu nội tâm · Hướng nội',
    yearNote: 'Cuốn sách đồng điệu nhất',
    favoriteQuote:
      'Trong một thế giới không ngừng nói, sự điềm tĩnh và biết lắng nghe chính là một nguồn sức mạnh bền bỉ.',
    personalTakeaway:
      'Cuốn sách giúp mình hiểu vì sao ban ngày mình vẫn bán hàng chu đáo nhưng tối đến lại khao khát ở một mình: đó là cách người hướng nội tái tạo năng lượng tự nhiên nhất.',
  },
  {
    id: 'mekong-essays',
    title: 'Cánh đồng bất tận & Tản văn Miền Tây',
    author: 'Nguyễn Ngọc Tư',
    theme: 'Văn học quê hương · Chiêm nghiệm',
    yearNote: 'Đọc những tối mưa Đồng Tháp',
    favoriteQuote:
      'Người miền Tây thương nhau bằng những điều nhỏ xíu, lặng lẽ như con nước lớn ròng mỗi bận.',
    personalTakeaway:
      'Đọc văn chương viết về miền sông nước làm mình thêm yêu cái tình chân chất của bà con ghé tiệm tạp hóa nhà mình mỗi sáng.',
  },
  {
    id: 'atomic-habits',
    title: 'Thay đổi Tí hon, Hiệu quả Bất ngờ',
    author: 'James Clear',
    theme: 'Kỷ luật cá nhân · Cân bằng làm & học',
    yearNote: 'Áp dụng cho lịch tuần 7 ngày',
    favoriteQuote:
      'Bạn không cần thay đổi tất cả trong một đêm; chỉ cần giữ nhịp tốt hơn một chút mỗi ngày.',
    personalTakeaway:
      'Nhờ giữ những thói quen nhỏ — mỗi tối đọc 15 trang sách, mỗi chiều Thứ Sáu chốt sổ gọn gàng — mình duy trì được lịch Thứ 2–Thứ 6 buôn bán, Thứ 7–Chủ Nhật đi học mà không bị quá tải.',
  },
];

export const SOUND_TRACKS: SoundTrack[] = [
  {
    id: 'quiet-evening',
    title: 'Chiều tĩnh lặng bên trang sách',
    mood: 'Ấm áp · Nhẹ nhàng · Sâu lắng',
    tempoLabel: 'Hòa âm Acoustic Pad · 64 BPM',
    description:
      'Giai điệu hợp âm chậm rãi lấy cảm hứng từ buổi tối yên ắng sau khi khép cửa tiệm tạp hóa, thích hợp khi lật mở một cuốn sách mới.',
    chords: [
      [261.63, 329.63, 392.0, 493.88],
      [220.0, 261.63, 329.63, 392.0],
      [174.61, 220.0, 261.63, 349.23],
      [196.0, 246.94, 293.66, 392.0],
    ],
    hasRainTexture: false,
  },
  {
    id: 'lotus-rain',
    title: 'Tiếng mưa hiên nhà Đồng Tháp',
    mood: 'Thư thái · Mưa rơi dịu · Chữa lành',
    tempoLabel: 'Thanh âm mưa nhẹ & Phím đàn · 58 BPM',
    description:
      'Sự kết hợp giữa tiếng mưa rả rích miền Tây và âm thanh trầm ấm, dành riêng cho những giờ phút ở một mình không vướng bận.',
    chords: [
      [293.66, 349.23, 440.0, 523.25],
      [246.94, 293.66, 392.0, 493.88],
      [261.63, 329.63, 392.0, 493.88],
      [220.0, 261.63, 329.63, 440.0],
    ],
    hasRainTexture: true,
  },
  {
    id: 'weekend-study',
    title: 'Ôn bài tối trước ngày lên lớp cuối tuần',
    mood: 'Tập trung · Trong trẻo · Tĩnh tại',
    tempoLabel: 'Hòa âm tối giản · 68 BPM',
    description:
      'Nhịp âm thanh đều đặn, ít xao nhãng giúp giữ sự tập trung khi xem lại bài giảng UEH Mekong chuẩn bị cho sáng Thứ Bảy.',
    chords: [
      [220.0, 277.18, 329.63, 415.3],
      [185.0, 220.0, 277.18, 369.99],
      [196.0, 246.94, 293.66, 392.0],
      [164.81, 207.65, 246.94, 329.63],
    ],
    hasRainTexture: false,
  },
];

export const CORE_VALUES: CoreValue[] = [
  {
    index: '01.',
    titleVi: 'Chăm chỉ từ Những Việc Nhỏ Nhất',
    subtitle: 'Steady Diligence',
    description:
      'Từ việc lau dọn kệ hàng mỗi sáng Thứ Hai đến việc ghi chép bài giảng chiều Chủ Nhật, mình tin sự đều đặn mỗi ngày tạo nên nền tảng vững chắc nhất.',
  },
  {
    index: '02.',
    titleVi: 'Bền bỉ Vừa Làm Vừa Học',
    subtitle: 'Weekend Scholar at UEH Mekong',
    description:
      'Dành trọn Thứ Bảy và Chủ Nhật cho giảng đường UEH Mekong là lời cam kết của mình với việc hoàn thiện tri thức song hành cùng công việc mưu sinh.',
  },
  {
    index: '03.',
    titleVi: 'Chữ Tín Nơi Cửa Hàng Quê Nhà',
    subtitle: 'Honesty & Warmth',
    description:
      'Cửa hàng tạp hóa của mình giữ chân khách bằng hàng hóa chất lượng, giá cả thật thà và sự tử tế mộc mạc của người con Đồng Tháp.',
  },
  {
    index: '04.',
    titleVi: 'Bình Yên Trong Khoảng Lặng Một Mình',
    subtitle: 'Joy of Solitude',
    description:
      'Biết tận hưởng thời gian ở một mình giúp mình luôn tự chủ về cảm xúc, không phụ thuộc vào sự ồn ào bên ngoài để thấy vui vẻ.',
  },
  {
    index: '05.',
    titleVi: 'Mở Rộng Thế Giới Nhờ Đọc Sách',
    subtitle: 'Quiet Curiosity',
    description:
      'Dù lịch tuần kín tiếng buôn bán và học tập, những trang sách buổi tối vẫn giúp mình đi thật xa trong suy nghĩ và thấu cảm nhiều hơn.',
  },
  {
    index: '06.',
    titleVi: 'Nuôi Dưỡng Tâm Hồn Bằng Âm Nhạc',
    subtitle: 'Gentle Melodies',
    description:
      'Âm nhạc là người bạn đồng hành dịu dàng nhất, nối liền những giờ làm việc chăm chỉ với giấc ngủ an lành cuối ngày.',
  },
];
