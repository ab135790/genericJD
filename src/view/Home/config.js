const imgArr = [
    {
        imgUrl: 'https://img.yzcdn.cn/vant/apple-1.jpg'
    },
    {
        imgUrl: 'https://img.yzcdn.cn/vant/apple-2.jpg'
    }
];
const navArr = [
    {
        id: '0001',
        picUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/84753/1/16651/5549/5e7d5f9eE492c3864/4b9963fe16fae211.png.webp',
        name: '京东超市',
        item: '100-99卷'
    },
    {
        id: '0002',
        picUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/95626/6/16650/5992/5e7d5fdeE251a8742/d29fcc84ee0211f7.png.webp',
        name: '数码电器',
        item: ''
    },
    {
        id: '0003',
        picUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/105719/14/16594/7294/5e7d605eE007a21e7/63392310fbb001a4.png.webp',
        name: '京东服饰',
        item: ''
    },
    {
        id: '0004',
        picUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/104104/6/16755/5068/5e7d6202E212fcc22/3fda8f7d8b63b55f.png.webp',
        name: '京东生鲜',
        item: ''
    },
    {
        id: '0005',
        picUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/96727/8/16477/5183/5e7d6249E4730c38a/0f70da903eded263.png.webp',
        name: '京东到家',
        item: ''
    },
    {
        id: '0006',
        picUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/96542/9/16707/3569/5e7d62bcE5c4ee6a7/3bf6ac36ac9f17d9.png.webp',
        name: '充值缴费',
        item: ''
    },
    {
        id: '0007',
        picUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/86437/25/16675/6585/5e7d62e4E1095d733/d0d685ed0477d268.png.webp',
        name: '9.9元拼',
        item: ''
    },
    {
        id: '0008',
        picUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/110232/17/10270/4813/5e7d6310E79c9cb8d/6786eed1b786c010.png.webp',
        name: '领券',
        item: ''
    },
    {
        id: '0009',
        picUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/96795/33/16662/4749/5e7d6385Ec31e4b29/f36c778122286405.png.webp',
        name: '赚钱',
        item: ''
    },
    {
        id: '0002',
        picUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/97837/22/16281/7606/5e7d6411E0c0a91d6/93e0b359bfdf0239.png.webp',
        name: 'PLUS会员',
        item: ''
    },
    {
        id: '0003',
        picUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/86956/10/16811/5922/5e7cc74dE219a3d8d/e4f7c68febc8b29a.png.webp',
        name: '京东国际',
        item: ''
    },
    {
        id: '0004',
        picUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/108499/22/10229/4960/5e7cc7e3Ef0042744/e18bb8a5ee24049d.png.webp',
        name: '京东拍卖',
        item: ''
    },
    {
        id: '0005',
        picUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/108831/16/10402/4901/5e7cc891Ec4a1e209/7ec6358526c83cda.png.webp',
        name: '唯品会',
        item: ''
    },
    {
        id: '0006',
        picUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/87813/33/16566/5552/5e7cc8deEddd6bcb5/9afe008178b12b2b.png.webp',
        name: '玩3C',
        item: ''
    },
    {
        id: '0007',
        picUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/104372/23/16606/5314/5e7cc980E1b828146/d789952095cd80b9.png.webp',
        name: '沃尔玛',
        item: ''
    },
    {
        id: '0008',
        picUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/99304/34/16507/5170/5e7ccacaE08d0d35d/ea8a30610a682386.png.webp',
        name: '美妆馆',
        item: ''
    },
    {
        id: '0009',
        picUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/87481/10/16552/5320/5e7ccbc7Eb8454450/c8f70349dc66e093.png.webp',
        name: '京东旅行',
        item: ''
    },
    {
        id: '0007',
        picUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/88799/13/16665/5240/5e7d6448E42016d3c/77b343418a8a890d.png.webp',
        name: '拍拍二手',
        item: ''
    },
    {
        id: '0008',
        picUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/107817/13/10442/6306/5e7cccc8E7f9d6c59/9e06aa68ba7ba0f0.png.webp',
        name: '物流查询',
        item: ''
    },
    {
        id: '0009',
        picUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/98535/20/16481/5760/5e7d646aE9b72c32e/8e063cfb6bad4654.png.webp',
        name: '全部',
        item: ''
    }
];
const swiperSeckill = {
    slidesPerView: 5,
    spaceBetween: 5,
    observer: true,
    observeParents: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
};
const farmData = [
    {
        title: '优雅干练',
        wz: '职场好形象',
        imgUrl: 'https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/112933/12/2706/189867/5ea31096Ec642e360/3a672c46351a31f8.jpg!q70.jpg.dpg',
        id: '5'
    },
    {
        title: '唱片潮流',
        wz: '享悠然生活',
        imgUrl: 'https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/52986/2/12478/18913/5d96ed2aE2ad31cb6/74ce632368b0b310.jpg!q70.jpg.dpg',
        id: '6'
    },
    {
        title: '奇妙物语',
        wz: '解压小玩具',
        imgUrl: 'https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/103019/29/7625/450955/5dfc7e48Ea6d77df4/c5e1e9b0e859cdc4.jpg!q70.jpg.dpg',
        id: '7'
    },
    {
        title: '深夜食堂',
        wz: '深夜食堂',
        imgUrl: 'https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/107789/35/13864/247410/5ea28ff1Eb5c65abf/d52e78bdd7872c47.jpg!q70.jpg.dpg',
        id: '8'
    }
];
const formDataTop = [
    {
        title: '下厨做饭',
        wz: '尽享鲜香',
        imgUrl: 'https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/38465/5/6797/211663/5cd3b754E107cd897/e733efdd080cf918.jpg!q70.jpg.dpg',
        id: '1',
        children: {
            title: '下厨做饭',
            wz: '尽享鲜香',
            imgUrl: 'https://m.360buyimg.com/mobilecms/s150x150_jfs/t10978/8/1048112982/219858/7e876fc3/59db62edN0a6f276b.jpg!q70.jpg.dpg',
            id: '2'
        }
    },
    {
        title: '音乐青年',
        wz: '潮流乐器榜',
        imgUrl: 'https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/98940/29/15905/278639/5e762162E1eece406/013100bfca05ea12.jpg!q70.jpg.dpg',
        id: '3',
        children: {
            title: '音乐青年',
            wz: '潮流乐器榜',
            imgUrl: 'https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/51511/39/7187/256364/5d4ce5aaE4585f9fa/736d2efa2932fff3.jpg!q70.jpg.dpg',
            id: '4'
        }
    }
];
const DailyData = [
    {
        title: '免息星球',
        wz: '白条免息购',
        imgUrl: 'https://m.360buyimg.com/n1/s150x150_jfs/t29566/227/1464891645/10350/a5b133e2/5ce20cdcNd9cdd972.jpg!q70.jpg.dpg',
        id: '9'
    },
    {
        title: '每日特价',
        wz: '9块9疯抢',
        imgUrl: 'https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/85072/25/5818/20921/5def3796Eeb18104b/fed4740b6b58d144.jpg!q70.jpg.dpg',
        id: '10'
    },
    {
        title: '品牌闪购',
        wz: '汇大牌好价',
        imgUrl: 'https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/100430/19/5671/35161/5def3b36Eda0d4e24/cae78ce556a995c7.png!q70.jpg.dpg',
        id: '11'
    },
    {
        title: '京东直播',
        wz: '边看边买',
        imgUrl: 'https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/80435/12/13755/37856/5daeb76bEc10eb013/177eb658079595d1.jpg!q70.jpg.dpg',
        id: '12'
    },
    {
        title: '排行榜',
        wz: '热销推荐',
        imgUrl: 'https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/56939/39/1210/59272/5cefa52dE2f70588a/3174a20e743edd49.png!q70.jpg.dpg',
        id: '13'
    },
    {
        title: '拍拍好物',
        wz: 'iphone 5折起',
        imgUrl: 'https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/76945/35/760/26244/5cef9705E501242ee/c56b89c0946438ef.jpg!q70.jpg.dpg',
        id: '14'
    },
    {
        title: '新品首发',
        wz: '京东小魔方',
        imgUrl: 'https://m.360buyimg.com/n1/s150x150_jfs/t1/116252/24/2308/43604/5ea1359fE61a06adb/6cef94529cd1cf09.png!q70.jpg.dpg',
        id: '15'
    },
    {
        title: '发现好货',
        wz: '发现品质生活',
        imgUrl: 'https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/38988/36/7707/54292/5cefa2b0E1cce5cfa/64e76ed6c67568bf.png!q70.jpg.dpg',
        id: '16'
    }
];
export {
    imgArr,
    navArr,
    swiperSeckill,
    farmData,
    formDataTop,
    DailyData
};
