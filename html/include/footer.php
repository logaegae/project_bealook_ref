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
			autoplayTimeout:1000,
			autoplayHoverPause:true,
			items:1
	  });
	});

</script>

</body>
</html>
