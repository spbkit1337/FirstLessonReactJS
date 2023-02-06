//  Есть две осноные функции:

//     1) React.createElement(); - позволяет создать один или несколько html элементов

//     2) ReactDOM.render(); - нужна для вывода.  -->


//          Пример №1 Создание кнопки 

//         const containerWrapper = document.querySelector('#containerWrapper')

//         // В качестве первого параметра задаем нужный тэг например button . Второй параметр это свойства например цвет или например можно передать функцию например onClick. Третий параметр содержимое.

//         // Тут мы создали просто кнопку и записали это в константу
//         const likeButton = React.createElement('button' , {} , 'Мне нравится' );

//        //Чтобы вывести эту кнопку нужна эта функция
//        //В качестве первого параметра указываем "что выводим". А второй параметр "куда выводим"
//        ReactDOM.render(likeButton , containerWrapper);






        // Пример №2 Создаем react компонент

        // const containerWrapper = document.querySelector('#containerWrapper')

        // //создаем комонент 
        // //По сути мы переписали константу с присвоенной кнопкой в отдельный react компонент
        // class LikeButton extends React.Component {
        //     render (){
        //         return React.createElement(
        //         'button',
        //         {
        //           style : { border : '1px solid #000' , background: '#fff'}
        //         } ,
        //         'Мне нравится'
        //         );
        //     }
        // }

        // //Теперь чтобы вывести этот компонент нужно render сначало написать React.createElement () а в скобках указать что вывести . 
        // ReactDOM.render(React.createElement(LikeButton) , containerWrapper);







        // Пример №3 при нажатии на кнопку содержиме меняется 

        const containerWrapper = document.querySelector('#containerWrapper')

        //создаем комонент 
        //По сути мы переписали константу с присвоенной кнопкой в отдельный react компонент
        class LikeButton extends React.Component { 
            constructor(props) {    //определение свойств
                super(props);       //эта строчка позволяет нам использовать и делать доступными те свойства которые у нас используются и доступны в родительском классе  React.Component
                this.state = { isLiked : false }  //создаем state (состояние насколько я понял) потом в фигурных скобках какой то обьект и параметры. в данном примере будет у кнопки состояние как бы true либо false то есть нажата или нет

            }
            render (){
        
                //проверяем условие нажатой кнопки

                if(this.state.isLiked == true) {
                    return 'Вам понравилось'
                }

                return React.createElement(
                'button',
                {
                  style : { border : '1px solid #000' , background: '#fff'} ,
                  onClick: () => this.setState ({isLiked : true}) //тут добавляем событие onClick то есть при нажатии будет меняться state на true  
                } ,
                'Мне нравится'
                );
            }   
        }

        //Теперь чтобы вывести этот компонент нужно render сначало написать React.createElement () а в скобках указать что вывести . 
        ReactDOM.render(React.createElement(LikeButton) , containerWrapper);
