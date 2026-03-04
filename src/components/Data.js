const data = {
  best: [
    {
      id: 'best01',
      img: process.env.PUBLIC_URL + '/img/best01.jpg',
      title: '어노브 향수 오 드 퍼퓸+미니듀오 증정',
      sub01: '포근하게 스며들어 오랫동안 살결에 남는 나만의 분위기.',
      sub02: '당신만의 분위기와 우아함을 더해줄 어노브 오 드 퍼퓸',
      price01: '49,000원',
      price02: 49000,
      price03: null,
      date: '20250120',
      pop: 1,
      review: 30,
      option: [
        {
          type: '향',
          items : [
            {label: '-[필수] 옵션을 선택해 주세요'},
            {label: '엠버 그레이스'},
            {label: '로시 아우라'},
            {label: '퓨어 오차드'},
            {label: '센슈얼 화이트'},
            {label: '우드 인디고'}
          ]
        }
      ],
      detail: [
        process.env.PUBLIC_URL + '/img/detail_first.png',
        process.env.PUBLIC_URL + '/img/best01_detail01.jpg',
        process.env.PUBLIC_URL + '/img/best01_detail02.png',
      ]
    },

    {
      id: 'best02',
      img: process.env.PUBLIC_URL + '/img/best02.png',
      title: '어노브 딥 데미지 헤어 트리트먼트 EX 207ml',
      sub01: '단배질 집중 밀착! 극손상 클리닉 트리트먼트',
      sub02: null,
      price01: '19,000원',
      price02: 19000,
      price03: '22,000원',
      date: '20250504',
      pop: 1,
      review: 27,
      option: [
        {
          type: '구성',
          items: [
            {label: '-[필수] 옵션을 선택해 주세요'},
            {label: '딥 데미지 트리트먼트 207ml'},
            {label: '딥 데미지 트리트먼트 2&2 더블 업 세트 (207ml*2 + 40ml*2)'},
            {label: '딥 데미지 트리트먼트 207ml*2 + 40ml*2)'}
          ]
        },
        {
          type: '향',
          items: [
            {label: '---------'}
          ]
        }
      ],
      detail: [
        process.env.PUBLIC_URL + '/img/detail_first.png',
        process.env.PUBLIC_URL + '/img/best02_detail01.jpg',
        process.env.PUBLIC_URL + '/img/best02_detail02.png',
      ]
    },

    {
      id: 'best03',
      img: process.env.PUBLIC_URL + '/img/best03.png',
      title: '어노브 딥 데미지 리페어 단백질 샴푸 500g',
      sub01: '두피는 상쾌하게 모발은 부드럽게 단백질 앰플 샴푸',
      sub02: null,
      price01: '16,000원',
      price02: 16000,
      price03: '18,000원',
      date: '20250131',
      pop: 1,
      review: 20,
      option: [
        {
          type: '선택',
          items: [
            {label: '-[필수] 옵션을 선택해 주세요'},
            {label: '단백질 앰플 샴푸 500g'},
            {label: '단백질 앰플 샴푸 1&1 더블 세트(500g*2)'},
            {label: '단백질 앰플 샴푸 500g + 딥 데미시 트리트먼트 320ml '}
          ]
        },
        {
          type: '향',
          items: [
            {label: '-[필수] 옵션을 선택해 주세요'},
            {label: '스윗브리즈'},
            {label: '로시아우라'}
          ]
        }
      ],
      detail: [
        process.env.PUBLIC_URL + '/img/detail_first.png',
        process.env.PUBLIC_URL + '/img/best03_detail01.jpg',
        process.env.PUBLIC_URL + '/img/best03_detail02.png',
      ]
    }
  ],

  shop_best: [
    {
      id: 'Shop_best01',
      img: process.env.PUBLIC_URL + '/img/shop_best01.png',
      title: '어노브 딥 데미지 헤어 트리트먼트 EX 207ml',
      sub01: '단백질 집중 밀착! 극손상 클리닉 트리트먼트',
      sub02: null,
      price01: '19,000원',
      price02: 19000,
      price03: '22,000원',
      date: '20250114',
      pop: 2,
      review: 15,
      option: [
        {
          type: '구성',
          items: [
            {label: '-[필수] 옵션을 선택해 주세요'},
            {label: '딥 데미지 트리트먼트 207ml'},
            {label: '딥 데미지 트리트먼트 2&2 더블 업 세트 (207ml*2 + 40ml*2)'},
            {label: '딥 데미지 트리트먼트 207ml*2 + 40ml*2)'}
          ]
        },
        {
          type: '향',
          items: [
            {label: '---------'}
          ]
        }
      ],
      detail: [
        process.env.PUBLIC_URL + '/img/detail_first.png',
        process.env.PUBLIC_URL + '/img/best02_detail01.jpg',
        process.env.PUBLIC_URL + '/img/best02_detail02.png',
      ]
    },

    {
      id: 'Shop_best02',
      img: process.env.PUBLIC_URL + '/img/shop_best02.png',
      title: '어노브 실크 오일 헤어 에센스 70ml',
      sub01: '끈적임 없는 고영양 오일 헤어 에센스',
      sub02: null,
      price01: '19,000원',
      price02: 19000,
      price03: null,
      date: '20250204',
      pop: 3,
      review: 10,
      option: [
        {
          type: '향',
          items: [
            {label: '-[필수] 옵션을 선택해 주세요'},
            {label: '텐더볼륨'},
            {label: '웜페달'}
          ]
        }
      ],
      detail: [
        process.env.PUBLIC_URL + '/img/detail_first.png',
        process.env.PUBLIC_URL + '/img/shop_best_detail02-1.png'
      ]
    },

    {
      id: 'Shop_best03',
      img: process.env.PUBLIC_URL + '/img/shop_best03.jpg',
      title: '[대용량] 어노브 딥 데미지 헤어 트리트먼트 EX 320ml',
      sub01: '2가지 향! 극손상 클리닉 트리트먼트 대용량',
      sub02: null,
      price01: '22,000원',
      price02: 22000,
      price03: '28,000원',
      date: '20250502',
      pop: 4,
      review: 8,
      option: [
        {
          type: '향',
          items: [
            {label: '-[필수] 옵션을 선택해 주세요'},
            {label: '딥데미시 트리트먼트 대용량_텐더 볼륨'},
            {label: '딥데미시 트리트먼트 대용량_웜페달'}
          ]
        }
      ],
      detail: [
        process.env.PUBLIC_URL + '/img/detail_first.png',
        process.env.PUBLIC_URL + '/img/shop_best_detail03-1.jpg',
        process.env.PUBLIC_URL + '/img/shop_best_detail03-2.png'
      ]
    },

    {
      id: 'Shop_best04',
      img: process.env.PUBLIC_URL + '/img/shop_best04.png',
      title: '어노브 딥 데미지 리페어 단백질 샴푸 500g',
      sub01: '두피는 상쾌하게 모발은 부드럽게 단백질 앰플 샴푸',
      sub02: null,
      price01: '16,000원',
      price02: 16000,
      price03: '18,000원',
      date: '20250701',
      pop: 1,
      review: 22,
      option: [
        {
          type: '선택',
          items: [
            {label: '-[필수] 옵션을 선택해 주세요'},
            {label: '단백질 앰플 샴푸 500g'},
            {label: '단백질 앰플 샴푸 1&1 더블 세트(500g*2)'},
            {label: '단백질 앰플 샴푸 500g + 딥 데미시 트리트먼트 320ml '}
          ]
        },
        {
          type: '향',
          items: [
            {label: '-[필수] 옵션을 선택해 주세요'},
            {label: '스윗브리즈'},
            {label: '로시아우라'}
          ]
        }
      ],
      detail: [
        process.env.PUBLIC_URL + '/img/detail_first.png',
        process.env.PUBLIC_URL + '/img/best03_detail01.jpg',
        process.env.PUBLIC_URL + '/img/best03_detail02.png',
      ]
    },

    {
      id: 'Shop_best05',
      img: process.env.PUBLIC_URL + '/img/shop_best05.png',
      title: '어노브 딥 데미지 트리트먼트 2&2 더블 업 세트',
      sub01: '단백질 집중 밀착! 극손상 클리닉 트리트먼트',
      sub02: '207mlX2 + 40mlX2',
      price01: '32,000원',
      price02: 32000,
      price03: '44,000원',
      date: '202501203',
      pop: 5,
      review: 7,
      option: [
        {
          type: '향',
          items: [
            {label: '-[필수] 옵션을 선택해 주세요'},
            {label: '텐더볼륨'},
            {label: '웜페달'}
          ]
        }
      ],
      detail: [
        process.env.PUBLIC_URL + '/img/detail_first.png',
        process.env.PUBLIC_URL + '/img/shop_best_detail05-1.jpg'
      ]
    },

    {
      id: 'Shop_best06',
      img: process.env.PUBLIC_URL + '/img/shop_best06.png',
      title: '어노브 딥 데미지 트리트먼트 207ml + 실크 오일 에센스 70ml',
      sub01: '극손상모를 위한 영양케어 세트',
      sub02: null,
      price01: '32,000원',
      price02: 32000,
      price03: '41,000원',
      date: '202508015',
      pop: 6,
      review: 22,
      option: [
        {
          type: '향',
          items: [
            {label: '-[필수] 옵션을 선택해 주세요'},
            {label: '텐더볼륨'},
            {label: '웜페달'}
          ]
        }
      ],
      detail: [
        process.env.PUBLIC_URL + '/img/detail_first.png',
        process.env.PUBLIC_URL + '/img/shop_best_detail06-1.png'
      ]
    }
  ],

  shop_hair: [
    {
      id: 'Shop_hair05',
      img: process.env.PUBLIC_URL + '/img/Shop_hair05.png',
      title: '어노브 히팅 가드 노워시 헤어 트리트먼트 147ml',
      sub01: '씻지 않는 단백질 열 손상 케어 헤어팩',
      sub02: null,
      price01: '16,000원',
      price02: 16000,
      price03: '18,000원',
      date: '20250312',
      pop: 5,
      review: 15,
      option: [
        {
          type: '선택',
          items: [
            {label: '-[필수] 옵션을 선택해 주세요'},
            {label: '히팅 가드 노워시 트리트먼트 147ml'},
            {label: '히팅 가드 노워시 트리트먼트 1&1 더블 세트(147ml*2)'}
          ]
        }
      ],
      detail: [
        process.env.PUBLIC_URL + '/img/detail_first.png',
        process.env.PUBLIC_URL + '/img/shop_hair_detail05-1.jpg',
        process.env.PUBLIC_URL + '/img/shop_hair_detail05-2.png'
      ]
    },

    {
      id: 'Shop_hair06',
      img: process.env.PUBLIC_URL + '/img/Shop_hair06.png',
      title: '어노브 노워시 워터 앰플 트리트먼트 200ml',
      sub01: '뿌리는 순간 엉킴 없이 부드러운 집착 워터팩',
      sub02: null,
      price01: '22,900원',
      price02: 22900,
      price03: '25,000원',
      date: '20250430',
      pop: 6,
      review: 11,
      option: [
        {
          type: '선택',
          items: [
            {label: '-[필수] 옵션을 선택해 주세요'},
            {label: '노워시 워터 앰플 트리트먼트 200ml'},
            {label: '노워시 워터 앰플 트리트먼트 1&1 더블 세트(200ml*2)'}
          ]
        }
      ],
      detail: [
        process.env.PUBLIC_URL + '/img/detail_first.png',
        process.env.PUBLIC_URL + '/img/shop_hair_detail06-1.jpg',
        process.env.PUBLIC_URL + '/img/shop_hair_detail06-2.png'
      ]
    },

    {
      id: 'Shop_hair07',
      img: process.env.PUBLIC_URL + '/img/Shop_hair07.png',
      title: '어노브 워터 에센스 미스트 200ml',
      sub01: '마른 모발에도 산뜻하고 부드러운 단백질 워터 미스트',
      sub02: null,
      price01: '16,900원',
      price02: 16900,
      price03: '20,000원',
      date: '20250324',
      pop: 7,
      review: 11,
      option: [
        {
          type: '선택',
          items: [
            {label: '-[필수] 옵션을 선택해 주세요'},
            {label: '노워시 워터 에센스 미스트 200ml'},
            {label: '노워시 워터 에센스 미스트 1&1 더블 세트(200ml*2)'}
          ]
        }
      ],
      detail: [
        process.env.PUBLIC_URL + '/img/detail_first.png',
        process.env.PUBLIC_URL + '/img/shop_hair_detail07-1.jpg',
        process.env.PUBLIC_URL + '/img/shop_hair_detail07-2.png'
      ]
    },

    {
      id: 'Shop_hair08',
      img: process.env.PUBLIC_URL + '/img/Shop_hair08.png',
      title: '어노브 프리즈 카밍 슬릭 리브인 컨디셔너 150ml',
      sub01: '부스스한 모발도 매끈하게 슬릭 헤어 완성!',
      sub02: null,
      price01: '25,000원',
      price02: 25000,
      price03: null,
      date: '20250703',
      pop: 7,
      review: 11,
      option: null,
      detail: [
        process.env.PUBLIC_URL + '/img/detail_first.png',
        process.env.PUBLIC_URL + '/img/shop_hair_detail08-1.ppg'
      ]
    },

    {
      id: 'Shop_best01',
      img: process.env.PUBLIC_URL + '/img/shop_best01.png',
      title: '어노브 딥 데미지 헤어 트리트먼트 EX 207ml',
      sub01: '단백질 집중 밀착! 극손상 클리닉 트리트먼트',
      sub02: null,
      price01: '19,000원',
      price02: 19000,
      price03: '22,000원',
      date: '20250114',
      pop: 2,
      review: 15,
      option: [
        {
          type: '구성',
          items: [
            {label: '-[필수] 옵션을 선택해 주세요'},
            {label: '딥 데미지 트리트먼트 207ml'},
            {label: '딥 데미지 트리트먼트 2&2 더블 업 세트 (207ml*2 + 40ml*2)'},
            {label: '딥 데미지 트리트먼트 207ml*2 + 40ml*2)'}
          ]
        },
        {
          type: '향',
          items: [
            {label: '---------'}
          ]
        }
      ],
      detail: [
        process.env.PUBLIC_URL + '/img/detail_first.png',
        process.env.PUBLIC_URL + '/img/best02_detail01.jpg',
        process.env.PUBLIC_URL + '/img/best02_detail02.png',
      ]
    },

    {
      id: 'Shop_best02',
      img: process.env.PUBLIC_URL + '/img/shop_best02.png',
      title: '어노브 실크 오일 헤어 에센스 70ml',
      sub01: '끈적임 없는 고영양 오일 헤어 에센스',
      sub02: null,
      price01: '19,000원',
      price02: 19000,
      price03: null,
      date: '20250204',
      pop: 3,
      review: 10,
      option: [
        {
          type: '향',
          items: [
            {label: '-[필수] 옵션을 선택해 주세요'},
            {label: '텐더볼륨'},
            {label: '웜페달'}
          ]
        }
      ],
      detail: [
        process.env.PUBLIC_URL + '/img/detail_first.png',
        process.env.PUBLIC_URL + '/img/shop_best_detail02-1.png'
      ]
    },

    {
      id: 'Shop_best03',
      img: process.env.PUBLIC_URL + '/img/shop_best03.jpg',
      title: '[대용량] 어노브 딥 데미지 헤어 트리트먼트 EX 320ml',
      sub01: '2가지 향! 극손상 클리닉 트리트먼트 대용량',
      sub02: null,
      price01: '22,000원',
      price02: 22000,
      price03: '28,000원',
      date: '20250502',
      pop: 4,
      review: 8,
      option: [
        {
          type: '향',
          items: [
            {label: '-[필수] 옵션을 선택해 주세요'},
            {label: '딥데미시 트리트먼트 대용량_텐더 볼륨'},
            {label: '딥데미시 트리트먼트 대용량_웜페달'}
          ]
        }
      ],
      detail: [
         process.env.PUBLIC_URL + '/img/detail_first.png',
        process.env.PUBLIC_URL + '/img/shop_best_detail03-1.jpg',
        process.env.PUBLIC_URL + '/img/shop_best_detail03-2.png'
      ]
    },

    {
      id: 'Shop_best04',
      img: process.env.PUBLIC_URL + '/img/shop_best04.png',
      title: '어노브 딥 데미지 리페어 단백질 샴푸 500g',
      sub01: '두피는 상쾌하게 모발은 부드럽게 단백질 앰플 샴푸',
      sub02: null,
      price01: '16,000원',
      price02: 16000,
      price03: '18,000원',
      date: '20250701',
      pop: 1,
      review: 22,
      option: [
        {
          type: '선택',
          items: [
            {label: '-[필수] 옵션을 선택해 주세요'},
            {label: '단백질 앰플 샴푸 500g'},
            {label: '단백질 앰플 샴푸 1&1 더블 세트(500g*2)'},
            {label: '단백질 앰플 샴푸 500g + 딥 데미시 트리트먼트 320ml '}
          ]
        },
        {
          type: '향',
          items: [
            {label: '-[필수] 옵션을 선택해 주세요'},
            {label: '스윗브리즈'},
            {label: '로시아우라'}
          ]
        }
      ],
      detail: [
        process.env.PUBLIC_URL + '/img/detail_first.png',
        process.env.PUBLIC_URL + '/img/best03_detail01.jpg',
        process.env.PUBLIC_URL + '/img/best03_detail02.png',
      ]
    }
  ],

  shop_style: [

    {
      id: 'shop_style01',
      img: process.env.PUBLIC_URL + '/img/shop_style01.png',
      title: '어노브 볼륨 업 픽서 200ml',
      sub01: '뭉침 없이 부드럽게 스타일 고정!',
      sub02: null,
      price01: '16,000원',
      price02: 16000,
      price03: null,
      date: '20251103',
      pop: 2,
      review: 5,
      option: [
        {
          type: '선택',
          items: [
            {label: '-[필수] 옵션을 선택해 주세요'},
            {label: '볼퓸 업 픽서 200ml'},
            {label: '볼퓸 업 픽서 (200ml*2)'}
          ]
        }
      ],
      detail: [
        process.env.PUBLIC_URL + '/img/detail_first.png',
        process.env.PUBLIC_URL + '/img/shop_style_detail01-1.jpg',
        process.env.PUBLIC_URL + '/img/shop_style_detail01-2.png',
        process.env.PUBLIC_URL + '/img/shop_style_detail01-3.png',
      ]
    },

    {
      id: 'shop_style02',
      img: process.env.PUBLIC_URL + '/img/shop_style02.jpg',
      title: '어노브 프리즈 카밍 슬릭 헤어 피니싱 스틱 10ml',
      sub01: '24시간 뭉침 없이 확실한 잔머리 픽싱',
      sub02: null,
      price01: '18,000원',
      price02: 18000,
      price03: null,
      date: '2025324',
      pop: 3,
      review: 12,
      option: null,
      detail: [
        process.env.PUBLIC_URL + '/img/detail_first.png',
        process.env.PUBLIC_URL + '/img/shop_style_detail02-1.png'
      ]
    },

    {
      id: 'shop_style03',
      img: process.env.PUBLIC_URL + '/img/shop_style03.png',
      title: '어노브 볼륨 업 컬링 헤어 에센스 147ml',
      sub01: '처음 컬링 그대로 탄력있게 수분컬크림',
      sub02: null,
      price01: '16,000원',
      price02: 16000,
      price03: null,
      date: '20250511',
      pop: 1,
      review: 30,
      option: [
        {
          type: '선택',
          items: [
            {label: '-[필수] 옵션을 선택해 주세요'},
            {label: '볼퓸 업 컬링 에센스 147ml'},
            {label: '볼퓸 업 컬링 에센스 (147ml*2)'}
          ]
        }
      ],
      detail: [
        process.env.PUBLIC_URL + '/img/detail_first.png',
        process.env.PUBLIC_URL + '/img/shop_style_detail03-1.jpg',
        process.env.PUBLIC_URL + '/img/shop_style_detail03-2.png'
      ]
    }
  ],

  shop_set : [
    {
      id: 'Shop_best05',
      img: process.env.PUBLIC_URL + '/img/shop_best05.png',
      title: '어노브 딥 데미지 트리트먼트 2&2 더블 업 세트',
      sub01: '단백질 집중 밀착! 극손상 클리닉 트리트먼트',
      sub02: '207mlX2 + 40mlX2',
      price01: '32,000원',
      price02: 32000,
      price03: '44,000원',
      date: '202501203',
      pop: 2,
      review: 7,
      option: [
        {
          type: '향',
          items: [
            {label: '-[필수] 옵션을 선택해 주세요'},
            {label: '텐더볼륨'},
            {label: '웜페달'}
          ]
        }
      ],
      detail: [
        process.env.PUBLIC_URL + '/img/detail_first.png',
        process.env.PUBLIC_URL + '/img/shop_best_detail05-1.jpg'
      ]
    },

    {
      id: 'Shop_best06',
      img: process.env.PUBLIC_URL + '/img/shop_best06.png',
      title: '어노브 딥 데미지 트리트먼트 207ml + 실크 오일 에센스 70ml',
      sub01: '극손상모를 위한 영양케어 세트',
      sub02: null,
      price01: '32,000원',
      price02: 32000,
      price03: '41,000원',
      date: '202508015',
      pop: 3,
      review: 22,
      option: [
        {
          type: '향',
          items: [
            {label: '-[필수] 옵션을 선택해 주세요'},
            {label: '텐더볼륨'},
            {label: '웜페달'}
          ]
        }
      ],
      detail: [
        process.env.PUBLIC_URL + '/img/detail_first.png',
        process.env.PUBLIC_URL + '/img/shop_best_detail06-1.png'
      ]
    },

    {
      id: 'shop_set01',
      img: process.env.PUBLIC_URL + '/img/shop_set01.png',
      title: '어노브 BEST KIT',
      sub01: '딥 데미지 트리트먼트 40ml+딥 데미지 트리트먼트 웜페탈 10ml+리페어 샴푸 10ml+실크 오일 에센스 2ml',
      sub02: null,
      price01: '품절',
      price02: '품절',
      price03: 10000,
      date: '202502010',
      pop: 1,
      review: 30,
      option: [
        {
          type: '향',
          items: [
            {label: '-[필수] 옵션을 선택해 주세요'},
            {label: '텐더볼륨'},
            {label: '웜페달'}
          ]
        }
      ],
      detail: [
        process.env.PUBLIC_URL + '/img/detail_first.png',
        process.env.PUBLIC_URL + '/img/shop_set_detail01-1.jpg'
      ]
    },

    {
      id: 'shop_set02',
      img: process.env.PUBLIC_URL + '/img/shop_set02.png',
      title: '어노브 오 드 퍼퓸 디스커버리 세트',
      sub01: '당신만의 우아한 존재감을 더해 줄 감각적인 향',
      sub02: '다섯가지 페르소나를 담은 어노브 오 드 퍼퓸 디스커버리 세트',
      price01: '23,000원',
      price02: 23000,
      price03: null,
      date: '20260110',
      pop: 4,
      review: 10,
      option: null,
      detail: [
        process.env.PUBLIC_URL + '/img/detail_first.png',
        process.env.PUBLIC_URL + '/img/shop_set_detail02-1.jpg'
      ]
    },

    {
      id: 'shop_set03',
      img: process.env.PUBLIC_URL + '/img/shop_set03.jpg',
      title: '어노브 헤어 패들 브러쉬',
      sub01: '우아한 머릿결을 완성하는 헤어 패들 브러쉬',
      sub02: null,
      price01: '16,000원',
      price02: 16000,
      price03: null,
      date: '20260120',
      pop: 5,
      review: 2,
      option: null,
      detail: [
        process.env.PUBLIC_URL + '/img/detail_first.png',
        process.env.PUBLIC_URL + '/img/shop_set_detail03-1.jpg'
      ]
    }
  ],

  event: [
    {
      id: 'event01',
      img: process.env.PUBLIC_URL + '/img/event01.png',
      title: '어노브 BEST KIT',
      sub: '무료 체험 이벤트',
      detail: [
        process.env.PUBLIC_URL + '/img/event01_detail.png'
      ]
    },

    {
      id: 'event02',
      img: process.env.PUBLIC_URL + '/img/event02.jpg',
      title: '카카오톡 채널',
      sub: '추가 이벤트',
      detail: [
        process.env.PUBLIC_URL + '/img/event02-1_detail.jpg',
        process.env.PUBLIC_URL + '/img/event02-2_detail.jpg',
        process.env.PUBLIC_URL + '/img/event02-3_detail.jpg',
        process.env.PUBLIC_URL + '/img/event02-4_detail.jpg'
      ]
    },

    {
      id: 'event03',
      img: process.env.PUBLIC_URL + '/img/event03.jpg',
      title: '신규 회원',
      sub: '가입 이벤트',
      detail: [
        process.env.PUBLIC_URL + '/img/event03-1_detail.jpg',
        process.env.PUBLIC_URL + '/img/event03-2_detail.jpg',
        process.env.PUBLIC_URL + '/img/event03-3_detail.jpg',
        process.env.PUBLIC_URL + '/img/event03-4_detail.jpg'
      ]
    }
  ]
}

export default data;