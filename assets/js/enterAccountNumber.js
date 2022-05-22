function btnLogin() {
        var text001;
        var colors001 = input001.value;

        if (colors001 == "0xA732zb9") {
          text001 = "Login as Ray P.M."
          document.getElementById('message001').innerHTML = text001;

          window.open('account/0.html')
        }

        else if (colors001 == "0xA204ta7") {
          text001 = "Login as Álvaro Poo"
          document.getElementById('message001').innerHTML = text001;

          window.open('account/1.html')
        }

        else if (colors001 == "0xB701cr3") {
          text001 = "Login as Dulce María"
          document.getElementById('message001').innerHTML = text001;

          window.open('account/2.html')
        }

        else if (colors001 == "0xC509bp2") {
          text001 = "Login as Laura Mosquero"
          document.getElementById('message001').innerHTML = text001;

          window.open('account/3.html')
        }

        else if (colors001 == "0xE325aq6") {
          text001 = "Login as Ray P.P."
          document.getElementById('message001').innerHTML = text001;

          window.open('account/4.html')
        }

        else {
          text001 = "Debe escribir su número de cuenta"
          document.getElementById('message001').innerHTML = text001;
        }
        
      }