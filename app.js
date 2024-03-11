        const firebaseConfig = {
          apiKey: "AIzaSyCEuvnq4teYss4lkq1XZqQhUS3j7xyjDjY",
          authDomain: "webapp-d46b5.firebaseapp.com",
          projectId: "webapp-d46b5",
          datbaseURL: "https://webapp-d46b5-default-rtdb.firebaseio.com",
          storageBucket: "webapp-d46b5.appspot.com",
          messagingSenderId: "861075702793",
          appId: "1:861075702793:web:2c7198474d81ad890324d8",
        };

        firebase.initializeApp(firebaseConfig);

        var contactformDB=firebase.database().ref("registrationForm");


        document.getElementById("registrationForm").addEventListener("submit", submitForm);
        
        // Function to handle form submission
        function submitForm(e) {
          e.preventDefault();
        
          // Get user inputs
          var name = document.getElementVal('name');
          var phone = document.getElementVal('phone');
          var age = document.getElementVal('age');
      
          saveMessages(name, phone, age);
        }

        const saveMessages = (name, phone, age) => {
            var newContactForm = contactformDB.push();
            newContactForm.set({
                name : name,
                phone : phone,
                age : age,
            });

        };

        const getElementVal = (id) => {
            return document.getElementById(id).value;
        };