$(function() {

    var x = {};
    x.removed = false;
    x.clickSet = [];

    x.init = function() {
        x.clickSet.forEach(function(e, i) {
            x.clickSet[i]();
        });
    }
    //애니메이션 함수
    x.toolTxtShow = function(e) {
        e.show().animate({
            'opacity': '1',
            'top': '20px'
        }, 100);
        $('.header').addClass('mask');
    }
    x.toolTxtHide = function(e) {
        e.animate({
            'opacity': '0',
            'top': '0px',
            'display': 'none'
        }, 100);
    }

    // 버튼 클릭 이벤트 추가
    x.btnConfigDepth1 = function(target) {
        var _editor = document.getElementById(target);
        var btns = $('.hTDepth1 > button');
        btns.each(function(i, e) {
            if ($(e).hasClass("d1noArgBtn")) {
                var exec = $(e).attr("exec");
                $(e).off('click');
                $(e).click(function() {
                    _editor.setAttribute("contenteditable", "true");
                    _editor.focus();
                    document.execCommand('selectAll', false, null);
                    document.execCommand(exec);
                    _editor.removeAttribute("contenteditable");
                });
            }
        });
    }

    x.btnConfigDepth2 = function(target) {
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

    //영역 선택 설정
    x.clickSet.push(clickListable = function() {
        // 리스트 선택
        $(".listable").on("click", function() {
            console.log("listable");
        });
    });
    x.clickSet.push(clickDepth1 = function() {
        //depth1
        $(".editor-wrapper").on('mousedown', '.editable', function(e) {
            console.log("selected");
            if (!$(this).hasClass("ed-selected")) {
                x.toolTxtShow($('.tool-txt-click'));

                $(".ed-selected").removeClass("ed-selected");
                $(this).addClass("ed-selected");
                x.removed = true;

                x.btnConfigDepth1($(this).attr("id"));

                $(this).focus();
            }
            e.stopPropagation();
        });
    });
    x.clickSet.push(drag = function() {
        //처음부터 드래그 할 경우
        $(".editor-wrapper").on('mouseup', '.editable', function(e) {
            var selection = document.getSelection();
            if ($(this).hasClass("ed-selected") && "" + selection != '') {
                $(this).mousedown();
            }
            e.stopPropagation();
        });
    });
    x.clickSet.push(clickDepth2 = function() {
        //depth2
        $(".editor-wrapper").on('mousedown', '.editable.ed-selected', function(e) {
            console.log("editable");

            x.toolTxtHide($('.tool-txt-click'));
            x.toolTxtShow($('.tool-txt-drag'));

            x.btnConfigDepth2($(this).attr("id"));

            $("*[contenteditable=true]").removeAttr("contenteditable");
            $(this).attr("contenteditable", "true");
            $(this).focus();
            x.removed = true;
            e.stopPropagation();
        });
    });
    x.clickSet.push(remove = function() {
        // 선택 해제
        $(".editor-wrapper").on('mousedown', '*', function(e) {
            if (!x.removed && $(this).parents(".editable").length == 0) {
                console.log("removed");
                $("*[contenteditable=true]").removeAttr("contenteditable");
                $(".ed-selected").removeClass("ed-selected");
                x.toolTxtHide($('.tool-txt-click'));
                x.toolTxtHide($('.tool-txt-drag'));

                selected = null;
                x.removed = false;
            } else {
                $(this).parents(".editable").mousedown();
                x.removed = false;
            }
            e.stopPropagation();
        });
    });
    x.init();
});
