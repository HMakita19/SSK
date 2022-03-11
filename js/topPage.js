particlesJS("particles-js", {   //アニメーションを表示する要素(id)を指定
  particles: {
    number: { 
      value: 80,   // 要素に出力する数
      density: { 
        enable: true,   //true:有効, false:無効
        value_area: 500   // 表示間隔
      }
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",  // シェイプの形
      //シェイプボーダー設定
      stroke: { width: 0, color: "#000000" },
      // type = polygonの詳細設定
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    // シェイプ透明度
    opacity: {
      value: 0.3,  // シェイプ透明度の値
      random: false,  // ランダム設定
      anim: {
        enable: false,  //true:有効, false:無効
        speed: 0.959040959040959,  //速度
        opacity_min: 0.0959040959040959,  //最小透過率
        sync: false  //同期 true:有効, false:無効
      }
    },
    // シェイプサイズ
    size: {
      value: 1,
      random: false,  //true:有効, false:無効
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    // 線でつなげる
    line_linked: {
      enable: true,  //true:有効, false:無効
      distance: 150,  // 間隔
      color: "#ffffff",  // 色
      opacity: 0.4,  // 透過
      width: 1  // 幅
    },
    // モーション
    move: {
      enable: true,  //true:有効, false:無効
      speed: 0.5,  // 速度
      direction: "none",  // 動く方向 none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left
      random: true,  // ランダム設定 true:有効, false:無効
      straight: false,  // 静止 true:有効, false:無効
      out_mode: "out",  // 外側の動き ボックス内：bounce 外に逃がす：out
      bounce: false,  // ランダム設定 true:有効, false:無効
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    // イベント設定
    events: {
      onhover: { enable: false, mode: "repulse" },  //grad:シェイプと繋ぐ, bubble:拡大, repulse:反発
      onclick: { enable: true, mode: "push" },  //push:追加, remove:削除, bubble:拡大, repulse:反発
      resize: true
    },
    // マウスイベントの設定
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});

