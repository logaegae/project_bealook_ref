<!-- SCRIPTS -->

<script src="../static/js/bootstrap.min.js"></script>
<script src="../static/js/plugins.js"></script>
<script src="../static/js/custom.js"></script>

<script type="text/javascript" src="jquery.validate.min.js"></script>
<script type="text/javascript" src="additional-methods.min.js"></script>
<script type="text/javascript" src="messages_ko.min.js"></script>
<script type="text/javascript">
    $(function(){
        $("form").validate({
              //규칙
              rules: {
                  id: {
                      required : true,
                      minlength : 5,
  					  maxlength : 15
                  },
                  pw: {
                      required : true,
                      minlength : 6,
                      maxlength : 20
                  }
              },
              //규칙체크 실패시 출력될 메시지
              messages : {
                  id: {
                      required : "필수로 입력하세요",
                      minlength : "최소 {0}글자이상이어야 합니다"
                  },
                  pw: {
                      required : "필수로 입력하세요",
                      minlength : "최소 {0}글자이상이어야 합니다"
                  }
              }
  	  });
    })
</script>
</body>
</html>
