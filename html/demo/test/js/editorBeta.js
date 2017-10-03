$(function() {
    //선택자 정의
    var removed = false;

    // 리스트 선택
    $(".listable").on("click", function() {
        console.log("listable");
    });
    //depth1
    $(".editor-wrapper").on('mousedown', '.editable', function(e) {
        console.log("selected");
        if (!$(this).hasClass("ed-selected")) {
            toolTxtShow($('.tool-txt-click'));

            $(".ed-selected").removeClass("ed-selected");
            $(this).addClass("ed-selected");
            removed = true;

            btnConfigDepth1($(this).attr("id"));

            $(this).focus();
        }
        e.stopPropagation();
    });
    //처음부터 드래그 할 경우
    $(".editor-wrapper").on('mouseup', '.editable', function(e) {
        var selection = document.getSelection();
        if ($(this).hasClass("ed-selected") && "" + selection != '') {
            $(this).mousedown();
        }
        e.stopPropagation();
    });
    //depth2
    $(".editor-wrapper").on('mousedown', '.editable.ed-selected', function(e) {
        console.log("edoitable");

        toolTxtHide($('.tool-txt-click'));
        toolTxtShow($('.tool-txt-drag'));

        btnConfigDepth2($(this).attr("id"));

        $("*[contenteditable=true]").removeAttr("contenteditable");
        $(this).attr("contenteditable", "true");
        $(this).focus();
        removed = true;
        e.stopPropagation();
    });

    // 선택 해제
    $(".editor-wrapper").on('mousedown', '*', function(e) {
        if (!removed && $(this).parents(".editable").length == 0) {
            console.log("removed");
            $("*[contenteditable=true]").removeAttr("contenteditable");
            $(".ed-selected").removeClass("ed-selected");
            toolTxtHide($('.tool-txt-click'));
            toolTxtHide($('.tool-txt-drag'));

            selected = null;
            removed = false;
        } else {
            $(this).parents(".editable").mousedown();
            removed = false;
        }
        e.stopPropagation();
    });
});

function toolTxtShow(e) {
    e.show().animate({
        'opacity': '1',
        'top': '20px'
    }, 100);
    $('.header').addClass('mask');
}

function toolTxtHide(e) {
    e.animate({
        'opacity': '0',
        'top': '0px',
        'display': 'none'
    }, 100);
}
// 버튼 클릭 이벤트 추가
function btnConfigDepth1(target) {
    var _editor = document.getElementById(target);
    console.log(_editor);
    var btns = $('.hTDepth1 > button');

    btns.each(function(i, e) {
        if ($(e).hasClass("d1noArgBtn")) {
            var exec = $(e).attr("exec");
            $(e).click(function() {
                console.log(_editor)
                _editor.setAttribute("contenteditable", "true");
                _editor.focus();
                document.execCommand('selectAll', false, null);
                document.execCommand(exec);
                _editor.removeAttribute("contenteditable");
                _editor.focus();
            });
        }
        // switch ($(e).attr("exec")){
        //     case "bold" : $(e).click(function(){
        //             editor.attr("contenteditable","true");
        //             document.execCommand('selectAll', false, null);
        //             document.execCommand('bold');
        //             editor.removeAttr("contenteditable");
        //         });
        //         break;
        // }
    });
}

function btnConfigDepth2(target) {
    var _editor = document.getElementById(target);
    var _noArgBtn = document.getElementsByClassName("d2noArgBtn");

    for (i = 0; i < _noArgBtn.length; i++) {
        _noArgBtn[i].onclick = function(e) {
            var exec = this.getAttribute("exec");
            console.log(exec)
            _editor.focus();
            document.execCommand(exec);
        }
    }
    $('.hTDepth2 button[exec=html]').onclick = function() {

        var html = prompt("html 태그 넣기", '<img src="http://main.nateimg.co.kr/img/cms/content_pool/2011/07/normal_bi.gif"/>');
        _editor.focus();
        document.execCommand('insertHTML', false, html);
    };
    $('.hTDepth2 button[exec=print]').onclick = function() {
        var html = _editor.innerHTML;
        alert(html);
    };
    $('.hTDepth2 button[exec=createlink]').onclick = function() {
        var selection = document.getSelection();
        //영역이 선택되었을때
        if ("" + selection != '') {
            var linkURL = prompt('URL을 입력하세요:', 'http://') || null;
            if (linkURL != null) {
                document.execCommand('createlink', false, linkURL);
                selection.anchorNode.parentElement.target = '_blank';
                _editor.focus();
            }
        }
    }
    $('.hTDepth2 button[exec=backColor]').onclick = function() {
        var color = prompt('색 입력: ', 'red') || null;
        if (color != null) {
            document.execCommand('backColor', false, color);
            _editor.focus();
        }
    }
    $('.hTDepth2 button[exec=foreColor]').onclick = function() {
        var color = prompt('색 입력: ', 'red') || null;
        if (color != null) {
            document.execCommand('foreColor', false, color);
            _editor.focus();
        }
    }
    $('.hTDepth2 button[exec=fontName]').onclick = function() {
        var name = prompt('폰트 입력 : ', 'NanumBarunGothic') || null;
        if (name != null) {
            document.execCommand('fontName', false, name);
            _editor.focus();
        }
    }
    $('.hTDepth2 button[exec=unlink]').onclick = function() {
        _editor.focus();
        document.execCommand('unlink');
    };
}
