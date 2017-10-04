$(function() {

    var x = {};
    x.removed = false;
    x.clickSet = [];

    x.init = function() {
        x.clickSet.forEach(function(e, i) {
            x.clickSet[i]();
        });
        x.default();
    }
    //애니메이션 함수
    x.toolTxtShow = function(e) {
        e.show().animate({
            'opacity': '1',
            'top': '20px'
        }, 150);
        $('.header .mask').stop().show().animate({
            'opacity': '1'
        }, 150);
    }
    x.toolTxtHide = function(e) {
        e.animate({
            'opacity': '0',
            'top': '0px',
            'display': 'none'
        }, 150);
        $('.header .mask').stop().animate({
            'opacity': '0',
            'display': 'none'
        }, 150, function() {
            $('.header .mask').css('display', 'none');
        });
    }

    //적용된 스타일 가져오기
    x.getComputedStyleProperty = function(el, propName) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(el, null)[propName];
        } else if (el.currentStyle) {
            return el.currentStyle[propName];
        }
    }

    x.getRange = function() {
        var containerEl, sel;
        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.rangeCount) {
                containerEl = sel.getRangeAt(0).commonAncestorContainer;
                // Make sure we have an element rather than a text node
                if (containerEl.nodeType == 3) {
                    containerEl = containerEl.parentNode;
                }
            }
        } else if ((sel = document.selection) && sel.type != "Control") {
            containerEl = sel.createRange().parentElement();
        }
        return containerEl;
    }

    x.getFontSize = function() {
        var containerEl = x.getRange();

        if (containerEl) {
            var fontSize = x.getComputedStyleProperty(containerEl, "fontSize");
            return fontSize;
        }
    }
    x.getFontFamily = function() {
        var containerEl = x.getRange();

        if (containerEl) {
            var fontFamily = x.getComputedStyleProperty(containerEl, "fontFamily");
            return fontFamily;
        }
    }
    // 버튼 클릭 이벤트 추가
    x.default = function() {
        $('button[exec=redo]').click(function() {
            console.log("???");
            document.execCommand('redo');
        });
        $('button[exec=undo]').click(function() {
            document.execCommand('undo');
        });
    }
    x.btnConfigDepth1 = function(target) {
        var _editor = document.getElementById(target);
        var btns = $('.hTDepth1 > button');
        btns.each(function(i, e) {
            $(e).off('click');
            if ($(e).hasClass("d1noArgBtn")) {
                var exec = $(e).attr("exec");
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
        var btns = $('.hTDepth2 > button');
        var selects = $('select');
        btns.each(function(i, e) {
            $(e).off('click');
        });
        selects.each(function(i, e) {
            $(e).off('change');
        });
        for (i = 0; i < _noArgBtn.length; i++) {
            _noArgBtn[i].onclick = function(e) {
                var exec = this.getAttribute("exec");
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
        $('.hTDepth2 button[exec=createLink]').click(function() {
            console.log("??")
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
        });
        $('.hTDepth2 button[exec=backColor]').click(function() {
            var color = prompt('색 입력: ', 'red') || null;
            if (color != null) {
                document.execCommand('backColor', false, color);
                _editor.focus();
            }
        });
        $('.hTDepth2 button[exec=foreColor]').click(function() {
            var color = prompt('색 입력: ', 'red') || null;
            if (color != null) {
                _editor.focus();
                document.execCommand('foreColor', false, color);
            }
        });
        $('.hTDepth2 #fontFamily').change(function() {
            var name = $(this).children("option:selected").val() || null;
            if (name != null) {
                _editor.focus();
                document.execCommand('fontName', false, name);
            }
        });
        $('.hTDepth2 #fontSize').change(function() {
            var spanString = $('<span/>', {
                'text': document.getSelection()
            }).css('font-size', $(this).children("option:selected").val()).prop('outerHTML');
            _editor.focus();
            document.execCommand('insertHTML', false, spanString);
        });
        $('.hTDepth2 button[exec=unlink]').onclick = function() {
            _editor.focus();
            document.execCommand('unlink');
        };

        //셀렉트 박스 디폴트 설정
        var getFontFamily = x.getFontFamily();
        $('.hTDepth2 #fontFamily option').each(function(i, e) {
            $(e).prop('selected', false);
            if ($(e).prop('value') == getFontFamily) {
                $(e).parents('.select-box').children('label').text($(e).text());
                $(e).prop('selected', true);
            }
        });
        var getFontSize = x.getFontSize();
        $('.hTDepth2 #fontSize option').each(function(i, e) {
            $(e).prop('selected', false);
            if ($(e).prop('value') == getFontSize) {
                $(e).parents('.select-box').children('label').text($(e).text());
                $(e).prop('selected', true);
            }
        });
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
