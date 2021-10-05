let somali=['riyo','ido','eey','rah','mas','dameer','libaax','shabeel','buug','qalin']
let english=['goats','sheep','dog','frog','snake','donkey','lion','tiger','book','pen']      

function changeContentLanguage(){
             if(document.querySelector('#choose-lang').value=='somali'){
              changeContentSomali()
              RandomSomaliWord()
             }else{
              changeContentEnglish()
              RandomEnglishWord()
             }      
        }

        function changeContentSomali(){
          document.querySelector('#lang-select').innerText='Dooro luuqadaada'
          document.querySelector('#header-title').innerText='Baro  oo Ciyaar'
          document.querySelector('#header-subtitle').innerText='Baro erayo cusub oo luuqad kale ah'
          document.querySelector('#question-label').innerText='Turjum eraygan'
          document.querySelector('#answer-label').innerText='Gali jawaabtaada'
          document.querySelector('#submit-answer').textContent='Riix'
          document.querySelector('#reset').textContent='Masax'
        }
        
        function changeContentEnglish(){
          document.querySelector('#lang-select').innerText='choose your language'
          document.querySelector('#header-title').innerText='Learn and Play'
          document.querySelector('#header-subtitle').innerText='Learn new words of another language'
          document.querySelector('#question-label').innerText='Translate this word'
          document.querySelector('#answer-label').innerText='Enter your anwser'
          document.querySelector('#submit-answer').textContent='submit'
          document.querySelector('#reset').textContent='Reset'
        }

     function RandomSomaliWord(){
          let randomItemSomali = Math.floor(Math.random()*10)
          document.querySelector("#question-input").value=somali[randomItemSomali]
         }

     function RandomEnglishWord(){
      let randomItemEnglish = Math.floor(Math.random()*10)
      document.querySelector("#question-input").value=english[randomItemEnglish]
     }

      function checkAnwser(){
      let language=document.querySelector('#choose-lang').value;
      if(language=='somali'){
      let question= document.querySelector('#question-input').value
      let anwser=document.querySelector('#answer-input').value.toLowerCase()
      if(somali.indexOf(question)==english.indexOf(anwser)){
        document.querySelector('#result').innerText='Correct'
        document.querySelector('#result').style.color='green'
        document.querySelector('#result').style.fontWeight='800'
        document.querySelector('#answer-input').value=''
        RandomSomaliWord()
      }else{
        document.querySelector('#result').innerText='in-Correct'
        document.querySelector('#result').style.color='red'
        document.querySelector('#result').style.fontWeight='1000'
      }
}else if(language=='english'){
  let question= document.querySelector('#question-input').value
      let anwser=document.querySelector('#answer-input').value.toLowerCase()
      if(english.indexOf(question)==somali.indexOf(anwser)){
        document.querySelector('#result').innerText='Correct'
        document.querySelector('#result').style.color='green'
        document.querySelector('#result').style.fontWeight='1000'
        document.querySelector('#answer-input').value=''
        RandomEnglishWord()
      }else{
        document.querySelector('#result').innerText='in-Correct'
        document.querySelector('#result').style.color='red'
        document.querySelector('#result').style.fontWeight='1000'
      }
}
  }


function Reset(){
        document.querySelector('#answer-input').value=""
        document.querySelector('#result').innerText=""
        if(document.querySelector('#choose-lang').value=='somali'){
          RandomSomaliWord()
        }else{
          RandomEnglishWord()
        }
      }
