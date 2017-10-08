var header = `
<div class="header">
    <div class="actions">
        <button type="button" class="btn btn-txt btn-preview">미리보기</button>
        <span>
            <button type="button" exec="undo" class="btn btn-icon btn-undo" title="실행 취소">실행 취소</button>
            <button type="button" exec="redo" class="btn btn-icon btn-redo" title="다시 실행">다시 실행</button>
        </span>
    </div>
    <div class="save">
        <button type="button" class="btn btn-txt btn-save">저장하기</button>
    </div>
    <div class="mask"></div>
</div>
`;
var depth1 = `
<div class="tool-common tool-txt tool-txt-click bl hTDepth1">
    <div class="select-box">
        <label for="fontFamily"></label>
        <select name="s01" id="fontFamily" required="required">
            <option value="" disabled class="hidden"></option>
            <option value="Noto Sans KR Light">Noto Sans</option>
            <option value="Nanum Gothic">나눔고딕</option>
            <option value="NanumBarunGothic">나눔바른고딕</option>
            <option>한겨례체</option>
            <option>정음체</option>
            <option>대한체</option>
            <option>이롭게바탕체</option>
        </select>
    </div>
    <div class="select-box">
        <label for="fontSize"></label>
        <select name="s02" id="fontSize" required="required">
            <option value="" disabled class="hidden"></option>
            <option value="7">제목 1 (30pt) </option>
            <option value="6">제목 2 (25pt)</option>
            <option value="5">제목 3 (20pt)</option>
            <option value="4">본문 1 (15pt)</option>
            <option value="3">본문 2 (12pt)</option>
        </select>
    </div>
    <button title="두껍게" exec="bold" class="d1noArgBtn btn btn-icon btn-bold">두껍게</button>
    <button title="이탤릭" exec="italic" class="d1noArgBtn btn btn-icon btn-italic">이탤릭</button>
    <button title="가운데 줄" exec="StrikeThrough" class="d1noArgBtn btn btn-icon btn-linethrough">가운데 줄</button>
    <button title="밑 줄" exec="underline" class="d1noArgBtn btn btn-icon btn-underline">밑 줄</button>
    <button title="글씨 색" exec="foreColor" class="btn btn-icon btn-color bl">글씨 색</button>
    <button title="좌측 정렬" exec="justifyLeft" class="d1noArgBtn btn btn-icon btn-ta-left bl">좌측 정렬</button>
    <button title="가운데 정렬" exec="justifyCenter" class="d1noArgBtn btn btn-icon btn-ta-center">가운데 정렬</button>
    <button title="우측 정렬" exec="justifyRight" class="d1noArgBtn btn btn-icon btn-ta-right br">우측 정렬</button>
</div>
`;
var depth2 = `
<div class="tool-common tool-txt tool-txt-drag bl hTDepth2">
    <div class="select-box">
        <label for="fontFamily">Noto Sans</label>
        <select name="s01" id="fontFamily" required="required">
            <option value="" disabled class="hidden"></option>
            <option value="Noto Sans KR Light">Noto Sans</option>
            <option value="Nanum Gothic">나눔고딕</option>
            <option value="NanumBarunGothic">나눔바른고딕</option>
            <option>한겨례체</option>
            <option>정음체</option>
            <option>대한체</option>
            <option>이롭게바탕체</option>
        </select>
    </div>
    <div class="select-box">
        <label for="fontSize">제목 1 (30pt)</label>
        <select name="s02" id="fontSize" required="required">
            <option value="" disabled class="hidden"></option>
            <option value="7">제목 1 (30pt) </option>
            <option value="6">제목 2 (25pt)</option>
            <option value="5">제목 3 (20pt)</option>
            <option value="4">본문 1 (15pt)</option>
            <option value="3">본문 2 (12pt)</option>
        </select>
    </div>
    <button title="두껍게" exec="bold" class="btn btn-icon btn-bold d2noArgBtn">두껍게</button>
    <button title="이탤릭" exec="italic" class="btn btn-icon btn-italic d2noArgBtn">이탤릭</button>
    <button title="가운데 줄" exec="StrikeThrough" class="btn btn-icon btn-linethrough d2noArgBtn">가운데 줄</button>
    <button title="밑 줄" exec="underline" class="btn btn-icon btn-underline d2noArgBtn">밑 줄</button>
    <button title="글씨 색" exec="foreColor" class="btn btn-icon btn-color bl">글씨 색</button>
    <button title="배경 색" exec="backColor" class="btn btn-icon btn-bgcolor">배경 색</button>
    <button title="글머리 불릿" exec="insertUnorderedList" class="btn btn-icon btn-ul bl d2noArgBtn">글머리 불릿</button>
    <button title="글머리 숫자" exec="insertOrderedList" class="btn btn-icon btn-ol d2noArgBtn">글머리 숫자</button>

    <button title="좌측 정렬" exec="justifyLeft" class="d2noArgBtn btn btn-icon btn-ta-left bl">좌측 정렬</button>
    <button title="가운데 정렬" exec="justifyCenter" class="d2noArgBtn btn btn-icon btn-ta-center">가운데 정렬</button>
    <button title="우측 정렬" exec="justifyRight" class="d2noArgBtn btn btn-icon btn-ta-right br">우측 정렬</button>

    <button title="링크 걸기" exec="createLink" class="btn btn-icon btn-link2 bl br">링크 걸기</button>
</div>
`;
$(function() {
    $("body").prepend(depth2);
    $("body").prepend(depth1);
    $("body").prepend(header);
})
