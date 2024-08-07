// Youtube iframe API
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";

const firstScriptTag = document.getElementsByTagName("script")[0];

// insertBefore( '추가할 태그', '어느 위치 뒤에 추가할 것인지' );
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  // YT.Player( 'id 속성값', 옵션(Object) )
  new YT.Player("player", {
    videoId: "An6LvWQuj_8", // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: "An6LvWQuj_8", // 반복 재생할 유튜브 영상 ID 목록
    },

    events: {
      onReady(event) {
        event.target.mute(); // mute -> 음소거
      },
    },
  });
}
