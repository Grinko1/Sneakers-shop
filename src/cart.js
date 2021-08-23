// import React from 'react';
// import axios from 'axios';

// import Info from '../Info';
// import { useCart } from '../../hooks/useCart';

// import styles from './Drawer.module.scss';



// function Drawer() {
 

//   const onClickOrder = async () => {
 

//   return (
//     <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
//       <div className={styles.drawer}>
//         <h2 className="d-flex justify-between mb-30">
//           Корзина <img onClick={onClose} className="cu-p" src="img/btn-remove.svg" alt="Close" />
//         </h2>

//         {items.length > 0 ? (
//           <div className="d-flex flex-column flex">
//             <div className="items flex">
  
//                     </div>

//                   <div className="mr-20 flex">
//                     <p className="mb-5">{obj.title}</p>
//                     <b>{obj.price} руб.</b>
//                   </div>
//                   <img
                    
//                     className="removeBtn"
//                     src="img/btn-remove.svg"
//                     alt="Remove"
//                   />
//                 </div>
//               ))}
//             </div>
//             <div className="cartTotalBlock">
//               <ul>
//                 <li>
//                   <span>Итого:</span>
//                   <div></div>
//                   <b> руб. </b>
//                 </li>
//                 <li>
//                   <span>Налог 5%:</span>
//                   <div></div>
//                   <b> руб. </b>
//                 </li>
//               </ul>
//               <button  className="greenButton">
//                 Оформить заказ <img src="img/arrow.svg" alt="Arrow" />
//               </button>
//             </div>
//           </div>
//         ) : (
//           <Info
//             // title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
//             // description={
//             //   isOrderComplete
//             //     ? `Ваш заказ # скоро будет передан курьерской доставке`
//             //     : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
//             // }
//             // image={isOrderComplete ? 'img/complete-order.jpg' : 'img/empty-cart.jpg'}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default Drawer
