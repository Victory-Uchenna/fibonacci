  function calculateFib() {
          var fibNumber = document.getElementById("fib_num").value
          var result = generateFibByNumber(parseInt(fibNumber));
          document.getElementById("fib_number_result").innerHTML = result;
        }

        function generateFibByNumber(fib_num) {
          var first,second,placeHolder;
          var result = "";

          first = 0;
          second = 1;
  		    placeHolder = second;

  		for(var i = 0; i < fib_num; i++) {
        result += placeHolder + "<br/>";
  		  placeHolder = first + second;
  		  first = second;
  		  second = placeHolder;
          }
          
          return result;
        }