
import bizert from "../src/assest/bizert.jpg"
import pho from "../src/assest/AdobePh.mp4"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="head">
        <h1 className="title">Tarhouni Fraj</h1>
        <br />
        <img src={"/fraj.jpg"} alt="fraj" className="frajpro" />
        <br></br>
        <p> لا بد من العودة مرةً أخرى إلى الحديث عن دار (مئذنة الشحم) لأنها المفتاح إلى شعري, و المدخل الصحيح إليه.

        و بغير الحديث عن هذه الدار تبقى الصورة غير مكتملة, و منتزعة من إطارها.

        هل تعرفون معنى أن يسكن الإنسان في قارورة عطر؟ بيتنا كان تلك القارورة.

إنني لا أحاول رشوتكم بتشبيه بليغ,و لكن ثقوا أنني بهذا التشبيه لا أظلم قارورة العطر ..و إنما أظلم </p>
      </header>
      <img src={bizert} alt="BIZERT" className="home" />
      <video width="320" height="240" controls>
        <source src={pho} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
