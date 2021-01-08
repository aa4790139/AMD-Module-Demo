define(['amdModule'],
	function(amdModule) {
		function fun1() {
			alert("amdModule.fun1");
		}

		function fun2() {
			alert("amdModule.fun2");
		}
		
		return {
			f1:fun1,
			f2:fun2,
			f3:amdModule.f1
		}
	}
)