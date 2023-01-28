import React, { useState } from 'react';
import Card from './components/Card';
import Data from './components/Data.json';



function App() {

  const [urun, setUrun] = useState(Data);

  const [sepet, setSepet] = useState([]);
  return (
    <div className='container-fluid'>
      <h2 className='text-center'>Listelenen Ürünler</h2>
      <div className="row row-cols-md-4 my-3 px-5">
        {urun.map((urunler, index) => {
          return (
            <Card
              onClick={() => {
                const arr = [...sepet];
                // "sepet" state'inden bir kopyası alınır. Bu kopya, "arr" adında bir değişkene atanır.
                if (
                  arr.findIndex((ind) => {
                    // "arr" değişkeninde sepette aynı ürünün var olup olmadığı kontrol edilir. 
                    return urunler.id === ind.id;
                  }) === -1
                ) {
                  // Eğer aynı ürün yoksa, ürün "arr" değişkenine eklenir ve "setSepet" fonksiyonu ile "sepet" state'i güncellenir. 
                  arr.push(urunler)
                  setSepet(arr);
                } else {
                  arr.map((item) => {
                    if (item.id === urunler.id) {
                      return (item.adet += 1);
                      // Eğer aynı ürün varsa, "arr" değişkeninde dolaşılır ve aynı ürünün adeti arttırılır.
                    }
                    setSepet(arr)
                    // "setSepet" fonksiyonu ile "sepet" state'i güncellenir.
                  });
                }
              }}
              key={index}
              id={urunler.id}
              baslik={urunler.title}
              bilgi={urunler.info}
              resim={urunler.url}
              adet={urunler.adet}
            />
          );
        })}
      </div>
      <div>
        <h2>SEPET</h2>
        <ul className='list-group'>
          {
            sepet.map((item, index) => {
              // "sepet" state'indeki veriler kullanılarak bir döngü oluşturulur.
              return (
                // Bu döngü içinde her bir ürün için bir "li" etiketi oluşturulur.
                <li key={index} className='list-group-item d-flex justify-content-between align-items-center'>
                  {item.title + " Adet: "}
                  <b className='list-group-item d-flex justify-content-between align-items-center'>{item.adet}</b>
                </li>
                // Bu "li" etiketi içinde, ürünün adı, bilgisi ve adeti gösterilir.
              );
            })}
        </ul>
        {sepet.length > 0 ? (
          // "sepet" state'inin uzunluğu kontrol edilir. Eğer uzunluk 0'dan büyükse, "Sepeti Temizle" düğmesi oluşturulur. 
          // Bu düğme, "onClick" olayına tepki verir ve "setSepet" fonksiyonu ile "sepet" state'inin içeriğini sıfırlar.
          <button
            className="btn btn-primary btn-lg"
            onClick={() => {
              setSepet([]);
            }}>
            Sepeti Temizle
          </button>
        ) : (
          // Eğer "sepet" state'inin uzunluğu 0 ise, "Sepetinizde ürün bulunmamaktadır." mesajı gösterilir.
          <h2>Sepetinizde ürün bulunmamaktadır.</h2>
        )}
      </div>
    </div>
  );
}

export default App;