var depth1 = `
<div class="hTDepth1">
    <button exec="bold" class="d1noArgBtn">두껍게</button>
    <button exec="italic" class="d1noArgBtn">이탤릭</button>
    <button exec="underline" class="d1noArgBtn">밑줄</button>
    <button exec="StrikeThrough" class="d1noArgBtn">중간줄</button>
    <button exec="undo" class="d1noArgBtn">뒤로</button>
    <button exec="redo" class="d1noArgBtn">앞으로</button>
    <button exec="justifyleft" class="d1noArgBtn">왼쪽정렬</button>
    <button exec="justifycenter" class="d1noArgBtn">가운데정렬</button>
    <button exec="justifyright" class="d1noArgBtn">오른쪽정렬</button>
    <button exec="backColor" class="">배경색</button>
    <button exec="foreColor" class="">글자색</button>
    <button exec="fontName" class="">폰트</button>
</div>
`;
var depth2 = `
<div class="hTDepth2">
    <button exec="bold" class="d2noArgBtn">두껍게</button>
    <button exec="italic" class="d2noArgBtn">이탤릭</button>
    <button exec="underline" class="d2noArgBtn">밑줄</button>
    <button exec="StrikeThrough" class="d2noArgBtn">중간줄</button>
    <button exec="insertOrderedList" class="d2noArgBtn">글번호</button>
    <button exec="insertUnorderedList" class="d2noArgBtn">글머리</button>
    <button exec="undo" class="d2noArgBtn">뒤로</button>
    <button exec="redo" class="d2noArgBtn">앞으로</button>
    <button exec="outdent" class="d2noArgBtn">내어쓰기</button>
    <button exec="indent" class="d2noArgBtn">들여쓰기</button>
    <button exec="justifyleft" class="d2noArgBtn">왼쪽정렬</button>
    <button exec="justifycenter" class="d2noArgBtn">가운데정렬</button>
    <button exec="justifyright" class="d2noArgBtn">오른쪽정렬</button>
    <button exec="backColor" class="d2withArgBtn">배경색</button>
    <button exec="foreColor" class="d2withArgBtn">글자색</button>
    <button exec="fontName" class="d2withArgBtn">폰트</button>
    <button exec="createLink">링크</button>
    <button exec="unlink">링크해제</button>
    <button exec="html">html 넣기</button>
    <button exec="print">출력 </button>
</div>
`;
$(function() {
    $("body").prepend(depth1);
    $("body").prepend(depth2);
})
