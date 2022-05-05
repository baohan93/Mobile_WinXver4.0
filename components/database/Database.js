export const COLOURS = {
    white: '#ffffff',
    black: '#000000',
    green: '#00AC76',
    red: '#C04345',
    blue: '#0043F9',
    backgroundLight: '#F0F0F3',
    backgroundMedium: '#B9B9B9',
    backgroundDark: '#777777',
  };
  
  export const Items = [
    {
      id: 1,
      category: 'product',
      productName: 'Tai nghe Logitech G733 LIGHTSPEED Wireless',
      productPrice: 2989000,
      description:
        'Có khả năng kết nối ổn định và gần như không có độ trễ, đặc biệt phạm vi hoạt động lên tới 20m, ứng dụng công nghệ 7.1 DTS Headphone 2.0 X rất cao cấp',
      isOff: true,
      offPercentage: 10,
      productImage: require('../database/images/accessories/TN1.webp'),
      isAvailable: true,
      productImageList: [
        require('../database/images/accessories/TN1.webp'),
        require('../database/images/accessories/TN2.png'),
        require('../database/images/accessories/TN3.png'),
      ],
    },
    {
      id: 2,
      category: 'product',
      productName: 'Tai nghe Apple AirPods Max',
      productPrice: 9890000,
      description:
        'Tính năng chống ồn chủ động tách biệt âm nhạc khỏi các âm thanh xung quanh, chip Apple H1 cùng Bluetooth 5.0 cho kết nối ổn định,không gián đoạn',
      isOff: false,
      productImage: require('../database/images/accessories/TNA1.png'),
      isAvailable: true,
      productImageList: [
        require('../database/images/accessories/TNA1.png'),
        require('../database/images/accessories/TNA2.png'),
        require('../database/images/accessories/TNA3.png'),
      ],
    },
    {
      id: 3,
      category: 'product',
      productName: 'Chuột Logitech M337 Bluetooth',
      productPrice: 649000,
      description:
        'Logitech M337 có kích thước nhỏ 100.5 x 61.1 x 33mm, áp dụng công nghệ Bluetooth Classic 3.0 không dây',
      isOff: false,
      productImage: require('../database/images/products/C1.png'),
      isAvailable: true,
      productImageList: [
        require('../database/images/products/C1.png'),
        require('../database/images/products/C1.1.png'),
        require('../database/images/products/C1.2.png'),
      ],
    },
    {
      id: 4,
      category: 'product',
      productName: 'Chuột Logitech POP MOUSE',
      productPrice: 899000,
      description:
        'Nút cuộn thông minh chuyển từ chế độ theo dõi có độ chính xác cao sang cuộn nhanh, sử dụng công nghệ Bluetooth không dây để kết nối Chuột POP lên tới 3 thiết bị ',
      isOff: false,
      productImage: require('../database/images/accessories/CLG1.png'),
      isAvailable: true,
      productImageList: [
        require('../database/images/accessories/CLG1.png'),
        require('../database/images/accessories/CLG2.png'),
        require('../database/images/accessories/CLG3.png'),
      ],
    },
    {
      id: 5,
      category: 'accessory',
      productName: 'Chuột Logitech G502 HERO',
      productPrice: 1549000,
      description:
        'Cảm biến quang học tiên tiến cho độ chính xác cao, tính năng chiếu sáng RGB có thể tùy chỉnh, cấu hình trò chơi tùy chỉnh, từ 200 cho tới 25.600 DPI',
      isOff: true,
      offPercentage: 18,
      productImage: require('../database/images/accessories/C2.png'),
      isAvailable: true,
      productImageList: [
        require('../database/images/accessories/C2.png'),
        require('../database/images/accessories/C2.1.png'),
        require('../database/images/accessories/C2.3.png'),
      ],
    },
    {
      id: 6,
      category: 'accessory',
      productName: 'Bàn phím LOGITECH POP KEYS',
      productPrice: 2499000,
      description:
        'Kết nối 3 thiết bị cùng lúc, nhỏ gọn thoải mái, có độ bền cao, thời lượng pin lên tới 3 năm',
      isOff: false,
      productImage: require('../database/images/accessories/logi4.png'),
      isAvailable: true,
      productImageList: [
        require('../database/images/accessories/logi4.png'),
        require('../database/images/accessories/logi5.png'),
        require('../database/images/accessories/logi6.png'),
      ],
    },
    {
      id: 7,
      category: 'accessory',
      productName: 'Bàn phím Bluetooth K380 MULTI-DEVICE BLUETOOTH KEYBOARD',
      productPrice: 749000,
      description:
        'Bàn phím Đa thiết bị, mỏng, có trọng lượng nhẹ, thời lượng pin lên tới 2 năm',
      isOff: false,
      productImage: require('../database/images/accessories/logi1.png'),
      isAvailable: false,
      productImageList: [
        require('../database/images/accessories/logi1.png'),
        require('../database/images/accessories/logi2.png'),
        require('../database/images/accessories/logi3.png'),
      ],
    },
    {
      id: 8,
      category: 'accessory',
      productName: 'Chuột công thái học LIFT VERTICAL',
      productPrice: 1599000,
      description:
        'Hình dáng cơ bản của Lift vừa vặn với những bàn tay từ nhỏ tới trung bình như một chiếc găng tay. Kết nối dễ dàng bằng Bluetooth công nghệ Tiết kiệm Năng lượng.',
      isOff: false,
      productImage: require('../database/images/accessories/MGlv1.webp'),
      isAvailable: true,
      productImageList: [
        require('../database/images/accessories/MGlv1.webp'),
        require('../database/images/accessories/MGlv2.webp'),
        require('../database/images/accessories/MGlv13.webp'),
      ],
    },
    
    {
      id: 9,
      category: 'accessory',
      productName: 'Chuột bi xoay không dây ERGO M575',
      productPrice: 1199000,
      description:
        'ERGO M575 rất bền bỉ và đáng tin cậy. Với kỹ thuật từ Thụy Sĩ và kiểm soát quy trình sản xuất từ đầu tới cuối, nó được thiết kế để thể hiện hơn 3 triệu lần nhấp chất lượng.',
      isOff: false,
      productImage: require('../database/images/accessories/MGer1.png'),
      isAvailable: true,
      productImageList: [
        require('../database/images/accessories/MGer1.png'),
        require('../database/images/accessories/MGer2.png'),
        require('../database/images/accessories/MGer3.png'),
      ],
    },
    {
      id: 10,
      category: 'accessory',
      productName: 'Bàn phím không dây K270',
      productPrice: 469000,
      description:
        'Bàn phím K270 được chế tạo tiêu chuẩn chất lượng cao, tuổi thọ pin lên tới 24 tháng thời gian sử dụng pin có thể thay đổi tùy theo người dùng và điều kiện tính toán loại bỏ rắc rối khi phải thay pin thường xuyên',
      isOff: false,
      productImage: require('../database/images/accessories/MGk1.png'),
      isAvailable: true,
      productImageList: [
        require('../database/images/accessories/MGk1.png'),
        require('../database/images/accessories/MGk2.png'),
        require('../database/images/accessories/MGk3.png'),
      ],
    },
    {
      id: 11,
      category: 'accessory',
      productName: 'Tai nghe USB H540',
      productPrice: 999000,
      description:
        'Các màng loa được chỉnh laze và bộ cân bằng tích hợp đem đến âm thanh kỹ thuật số phong phú giúp bạn hoàn toàn đắm chìm vào âm nhạc, trò chơi hoặc cuộc gọi.',
      isOff: false,
      productImage: require('../database/images/accessories/HPh1.png'),
      isAvailable: true,
      productImageList: [
        require('../database/images/accessories/HPh1.png'),
        require('../database/images/accessories/HPh2.png'),
        require('../database/images/accessories/HPh3.png'),
      ],
    },
    {
      id: 12,
      category: 'accessory',
      productName: 'Tai nghe ZONE TRUE wireless Logitech',
      productPrice: 2500000,
      description:
        'Với tai nghe earbuds Bluetooth Zone True Wireless, giọng nói của bạn sẽ trong như pha lê, ngay cả trong những môi trường ồn ào.',
      isOff: false,
      productImage: require('../database/images/accessories/HPz1.png'),
      isAvailable: false,
      productImageList: [
        require('../database/images/accessories/HPz1.png'),
        require('../database/images/accessories/HPz2.png'),
        require('../database/images/accessories/HPz3.png'),
      ],
    },
    {
      id: 13,
      category: 'accessory',
      productName: 'Bàn phím K400 PLUS wireless',
      productPrice: 999000,
      description:
        'Bàn phím không dây cắm vào-là-sử dụng với bàn di chuột tích hợp cho bạn quyền điều khiển hoàn toàn máy tính có kết nối TV từ ghế sô-pha của mình.',
      isOff: false,
      productImage: require('../database/images/accessories/BPk3.webp'),
      isAvailable: true,
      productImageList: [
        require('../database/images/accessories/BPk2.webp'),
        require('../database/images/accessories/BPk1.webp'),
        require('../database/images/accessories/BPk3.webp'),
      ],
    },
    {
      id: 14,
      category: 'accessory',
      productName: 'Tai nghe âm thanh nổi H150',
      productPrice: 349000,
      description:
        'Tai nghe linh hoạt và có thể điều chỉnh, dành cho các máy tính sử dụng các cổng ngõ vào micrô và ngõ ra âm thanh 3,5 mm riêng biệt.',
      isOff: false,
      productImage: require('../database/images/accessories/HPn1.png'),
      isAvailable: true,
      productImageList: [
        require('../database/images/accessories/HPn1.png'),
        require('../database/images/accessories/HPn2.png'),
        require('../database/images/accessories/HPn3.png'),
      ],
    },
  ];
  
  