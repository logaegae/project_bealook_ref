<!-- FOOTER -->
<footer class="footer">

	<!-- FOOTER EXTRA -->
	<div class="footer-extra">
		<div class="container">
			<div class="row">

				<div class="col-md-6 col-md-push-6">
					<nav class="extra-menu pull-right">
						<a>logaegae@gmail.com</a>
						<!-- <a href="javascript:alert('준비중입니다');">Privacy Policy</a>
						<a href="javascript:alert('준비중입니다');">Agreement</a> -->
					</nav>
				</div>
				<div class="col-md-6 col-md-pull-6">
					<p class="copyrights pull-left">&copy; Copyrights 2017 &nbsp;<a href="/">Bealook</a></p>
				</div>
			</div>
		</div>
	</div>
	<!-- /.footer-extra -->

</footer>

<!-- /.footer -->
<!-- SCRIPTS -->

<script src="./static/js/jquery-2.1.4.min.js"></script>
<script src="./static/js/bootstrap.min.js"></script>
<script src="./static/js/plugins.js"></script>
<script src="./static/js/custom.js"></script>
<script src="./static/js/owl.carousel.min.js"></script>

<script type="text/javascript" src="jquery.validate.min.js"></script>
<script type="text/javascript" src="additional-methods.min.js"></script>
<script type="text/javascript" src="messages_ko.min.js"></script>

<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-94068709-2', 'auto');
	ga('send', 'pageview');

	$(document).ready(function(){
	  $(".owl-carousel").owlCarousel({
			animateOut: 'fadeOut',
			loop:true,
			autoplay:true,
			autoplayTimeout:5000,
			autoplayHoverPause:false,
			items:1,
			margin:10
	  });
      $("form").validate({
		  submitHandler: function() {
                var f = confirm("설문작성을 다 쓰셨나요?");
                if(f){
                    return true;
                } else {
                    return false;
                }
            },
            //규칙
            rules: {
                name: {
                    required : true,
                    minlength : 6,
					maxlength : 15
                },
                question1: {
                    required : true,
                    minlength : 3
                },
				question2: {
                    required : true,
                    minlength : 3
                },
				question3: {
                    required : true,
                    minlength : 3
                },
				question4: {
                    required : true,
                    minlength : 3
                }
            },
            //규칙체크 실패시 출력될 메시지
            messages : {
                id: {
                    required : "필수로 입력하세요",
                    minlength : "최소 {0}글자이상이어야 합니다"
                },
                question1: {
                    required : "필수로 입력하세요",
                    minlength : "최소 {0}글자이상이어야 합니다"
                },
				question2: {
                    required : "필수로 입력하세요",
                    minlength : "최소 {0}글자이상이어야 합니다"
                },
				question3: {
                    required : "필수로 입력하세요",
                    minlength : "최소 {0}글자이상이어야 합니다"
                },
				question4: {
                    required : "필수로 입력하세요",
                    minlength : "최소 {0}글자이상이어야 합니다"
                }
            }
	  });
	});

</script>

</body>
</html>
