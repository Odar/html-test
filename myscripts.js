$( document ).ready(function() {
    createRightMenu();
    createTest(1);
});

function createRightMenu(){
    var html="";
    for(var i=1;i<17;i++){
        html += "<li class=\"js-task-num\" onclick='createTest("+i+")'>" +
            "    <a href=\"#\">" +
            "    <b>"+i+"</b>" +
            "    </a>" +
            "    </li>";
    }
    $('#rightMenu').html(html);
    $('.js-task-num').on('click',function(){
        $('.js-task-num').each(function(){
            $(this).removeClass("selected-li");
        });
        $(this).addClass("selected-li");
    });
}

function createTest(num){
    var html ="";
    switch(num){
        case 1:
           html+="<a class=\"task-help _help\" href=\"#\">\n" +
               "                                <i class=\"icon icon_nav-question\"></i>\n" +
               "                            </a>\n" +
               "                            <a class=\"task-play _play\" href=\"#\">\n" +
               "                                <svg class=\"lesson-nav-item__icon i_step-8\">\n" +
               "                                    <use xlink:href=\"#icon-step-8\"></use>\n" +
               "                                </svg>\n" +
               "                            </a>\n" +
               "\n" +
               "                            <div class=\"test__task-block test__task_active\">\n" +
               "                                <div class=\"test__title\" data-intro=\"Внимательно ознакомьтесь с текстом задания\">\n" +
               "                                    <p>Восстановление последовательности\n" +
               "                                    </p>\n" +
               "                                    <p class=\"test__title-small\">Расположите часы в порядке возрастания времени</p>\n" +
               "                                </div>\n" +
               "\n" +
               "                                <div id='sortDiv' class=\"test-words\">\n" +
               "                                    <div class=\"test-words__item\">\n" +
               "                                        <div class=\"test-words__content test-border w30\">\n" +
               "                                            <img class=\"test-words__img\" src=\"img/clock1.png\" alt=\"\">\n" +
               "                                            <img class=\"svg-sun\" src=\"img/svg/sun.svg\" alt=\"\">\n" +
               "                                        </div>\n" +
               "\n" +
               "                                    </div>\n" +
               "                                    <div class=\"test-words__item\">\n" +
               "                                        <div class=\"test-words__content test-border w30\">\n" +
               "                                            <img class=\"test-words__img\" src=\"img/clock2.png\" alt=\"\">\n" +
               "                                            <img class=\"svg-sun\" src=\"img/svg/sun.svg\" alt=\"\">\n" +
               "                                        </div>\n" +
               "                                    </div>\n" +
               "                                    <div class=\"test-words__item\">\n" +
               "                                        <div class=\"test-words__content test-border w30\">\n" +
               "                                            <img class=\"test-words__img\" src=\"img/clock3.png\" alt=\"\">\n" +
               "                                            <img class=\"svg-sun\" src=\"img/svg/sun.svg\" alt=\"\">\n" +
               "                                        </div>\n" +
               "                                    </div>\n" +
               "                                </div>\n" +
               "\n" +
               "                            </div>";
           $("#testContainer").html(html);

           var $container =  $("#sortDiv");

            dragula([$container[0]], {
                direction: 'vertical'
            });

            break;
        case 2:
            html+="<a class=\"task-help _help\" href=\"#\">\n" +
                "                                <i class=\"icon icon_nav-question\"></i>\n" +
                "                            </a>\n" +
                "                            <a class=\"task-play _play\" href=\"#\">\n" +
                "                                <svg class=\"lesson-nav-item__icon i_step-8\">\n" +
                "                                    <use xlink:href=\"#icon-step-8\"></use>\n" +
                "                                </svg>\n" +
                "                            </a>\n" +
                "\n" +
                "                            <div class=\"test__task-block test__task_active\" style='width:100%'>\n" +
                "                                <div class=\"test__title\" data-intro=\"Внимательно ознакомьтесь с текстом задания\">\n" +
                "                                    <p>Восстановление последовательности\n" +
                "                                    </p>\n" +
                "                                    <p class=\"test__title-small\">\n" +
                "                                        Расставьте правильно картинки</p>\n" +
                "                                </div>\n" +
                "\n" +
                "                                <div id='sortDiv' class=\"test-words flex-test flex-test-space-between\" style='width:100%'>\n" +
                "                                    <div class=\"test-words__item ui-state-default\" style='width:25%;border:none;text-align: center'>\n" +
                "                                        <img src=\"img/tree.png\" alt=\"\">\n" +
                "                                        <div class=\"test-words__num\">1</div>\n" +
                "                                    </div>\n" +
                "                                    <div class=\"test-words__item ui-state-default\" style='width:25%;border:none;text-align: center'>\n" +
                "                                        <img src=\"img/tree2.png\" alt=\"\">\n" +
                "                                        <div class=\"test-words__num\">2</div>\n" +
                "                                    </div>\n" +
                "                                    <div class=\"test-words__item ui-state-default\" style='width:25%;border:none;text-align: center'>\n" +
                "                                        <img src=\"img/tree3.png\" alt=\"\">\n" +
                "                                        <div class=\"test-words__num\">3</div>\n" +
                "                                    </div>\n" +
                "                                    <div class=\"test-words__item ui-state-default\" style='width:25%;border:none;text-align: center'>\n" +
                "                                        <img src=\"img/tree4.png\" alt=\"\">\n" +
                "                                        <div class=\"test-words__num\">4</div>\n" +
                "                                    </div>\n" +
                "                                </div>\n" +
                "\n" +
                "                            </div>";

            $("#testContainer").html(html);

            var container =  $("#sortDiv");
            dragula([container[0]],{
                direction: 'horizontal'
            });

            break;
        case 3:
            html+="<a class=\"task-help _help\" href=\"#\">\n" +
                "                                <i class=\"icon icon_nav-question\"></i>\n" +
                "                            </a>\n" +
                "                            <a class=\"task-play _play\" href=\"#\">\n" +
                "                                <svg class=\"lesson-nav-item__icon i_step-8\">\n" +
                "                                    <use xlink:href=\"#icon-step-8\"></use>\n" +
                "                                </svg>\n" +
                "                            </a>\n" +
                "\n" +
                "                            <div class=\"test__task-block test__task_active\">\n" +
                "                                <div class=\"test__title\" data-intro=\"Внимательно ознакомьтесь с текстом задания\">\n" +
                "                                    <p>Раскраска</p>\n" +
                "                                    <p class=\"test__title-small\">\n" +
                "                                        Выполни действия, и раскрась картинку</p>\n" +
                "                                </div>\n" +
                "\n" +
                "                                <div class=\"test-words flex-test flex-test-space-between flex-test-alcenter\">\n" +
                "                                    <div class=\"test-words__item\">\n" +
                "                                        <div class=\"test-word__item-block\">\n" +
                "                                            <div class=\"test-choise test-choise__brown\">\n" +
                "                                                <span>8+2</span>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                        <div class=\"test-word__item-block\">\n" +
                "                                            <div class=\"test-choise test-choise__dark-blue\">\n" +
                "                                                <span>17-5</span>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                        <div class=\"test-word__item-block\">\n" +
                "                                            <div class=\"test-choise test-choise__red\">\n" +
                "                                                <span>16-9</span>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                        <div class=\"test-word__item-block\">\n" +
                "                                            <div class=\"test-choise test-choise__dark-purple\">\n" +
                "                                                <span>15-7</span>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                        <div class=\"test-word__item-block\">\n" +
                "                                            <div class=\"test-choise test-choise__white-green\">\n" +
                "                                                <span>8+3</span>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "                                    </div>\n" +
                "                                    <div class=\"test-words__item\">\n" +
                "                                        <img src=\"img/paint1.png\" alt=\"\">\n" +
                "                                    </div>\n" +
                "                                    <div class=\"test-words__item\">\n" +
                "\n" +
                "                                        <div class=\"test-word__item-block\">\n" +
                "                                            <div class=\"test-choise test-choise__pink\">\n" +
                "                                                <span>8+2</span>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                        <div class=\"test-word__item-block\">\n" +
                "                                            <div class=\"test-choise test-choise__white-blue\">\n" +
                "                                                <span>17-5</span>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                        <div class=\"test-word__item-block\">\n" +
                "                                            <div class=\"test-choise test-choise__purple\">\n" +
                "                                                <span>16-9</span>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                        <div class=\"test-word__item-block\">\n" +
                "                                            <div class=\"test-choise test-choise__green\">\n" +
                "                                                <span>15-7</span>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                        <div class=\"test-word__item-block\">\n" +
                "                                            <div class=\"test-choise test-choise__cancel\">\n" +
                "                                                <span>СБРОС</span>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "                                    </div>\n" +
                "                                </div>\n" +
                "\n" +
                "                            </div>";
            $("#testContainer").html(html);
            break;
        case 4:
            html+="<a class=\"task-help _help\" href=\"#\">\n" +
                "                        <i class=\"icon icon_nav-question\"></i>\n" +
                "                     </a>\n" +
                "                     <a class=\"task-play _play\" href=\"#\">\n" +
                "                        <svg class=\"lesson-nav-item__icon i_step-8\">\n" +
                "                           <use xlink:href=\"#icon-step-8\"></use>\n" +
                "                        </svg>\n" +
                "                     </a>\n" +
                "\n" +
                "                     <div class=\"test__task-block test__task_active\">\n" +
                "                        <div class=\"test__title\" data-intro=\"Внимательно ознакомьтесь с текстом задания\">\n" +
                "                           <p>Раскраска</p>\n" +
                "                           <p class=\"test__title-small\">\n" +
                "                              Выполни действия, и раскрась картинку</p>\n" +
                "                        </div>\n" +
                "\n" +
                "                        <div class=\"test-words flex-test flex-test-space-between flex-test-alcenter\">\n" +
                "                           <div class=\"test-words__item\">\n" +
                "                              <div class=\"test-word__item-block flex-test\">\n" +
                "                                 <span>1 - </span>\n" +
                "                                 <div class=\"test-choise test-choise__brown\">\n" +
                "                                 </div>\n" +
                "                              </div>\n" +
                "\n" +
                "                              <div class=\"test-word__item-block flex-test\">\n" +
                "                                 <span>2 - </span>\n" +
                "                                 <div class=\"test-choise test-choise__dark-blue\">\n" +
                "                                 </div>\n" +
                "                              </div>\n" +
                "\n" +
                "                              <div class=\"test-word__item-block flex-test\">\n" +
                "                                 <span>3 - </span>\n" +
                "                                 <div class=\"test-choise test-choise__red\">\n" +
                "                                 </div>\n" +
                "                              </div>\n" +
                "\n" +
                "                              <div class=\"test-word__item-block flex-test\">\n" +
                "                                 <span>4 - </span>\n" +
                "                                 <div class=\"test-choise test-choise__dark-purple\">\n" +
                "                                 </div>\n" +
                "                              </div>\n" +
                "\n" +
                "                              <div class=\"test-word__item-block flex-test\">\n" +
                "                                 <span>5 - </span>\n" +
                "                                 <div class=\"test-choise test-choise__white-green\">\n" +
                "                                 </div>\n" +
                "                              </div>\n" +
                "                           </div>\n" +
                "\n" +
                "                           <div class=\"test-words__item\">\n" +
                "                              <img src=\"img/paint2.png\" alt=\"\">\n" +
                "                           </div>\n" +
                "\n" +
                "                           <div class=\"test-words__item\">\n" +
                "\n" +
                "                              <div class=\"test-word__item-block flex-test\">\n" +
                "                                 <span>6 -</span>\n" +
                "                                 <div class=\"test-choise test-choise__pink\">\n" +
                "                                 </div>\n" +
                "                              </div>\n" +
                "\n" +
                "                              <div class=\"test-word__item-block flex-test\">\n" +
                "                                 <span>7 -</span>\n" +
                "                                 <div class=\"test-choise test-choise__white-blue\">\n" +
                "                                 </div>\n" +
                "                              </div>\n" +
                "\n" +
                "                              <div class=\"test-word__item-block flex-test\">\n" +
                "                                 <span>8 -</span>\n" +
                "                                 <div class=\"test-choise test-choise__purple\">\n" +
                "                                 </div>\n" +
                "                              </div>\n" +
                "\n" +
                "                              <div class=\"test-word__item-block flex-test\">\n" +
                "                                 <span>9 -</span>\n" +
                "                                 <div class=\"test-choise test-choise__green\">\n" +
                "                                 </div>\n" +
                "                              </div>\n" +
                "\n" +
                "                              <div class=\"test-word__item-block flex-test\">\n" +
                "                                 <div class=\"test-choise test-choise__cancel\">\n" +
                "                                    <span>СБРОС</span>\n" +
                "                                 </div>\n" +
                "                              </div>\n" +
                "                           </div>\n" +
                "                        </div>\n" +
                "\n" +
                "                     </div>";
            $("#testContainer").html(html);
            break;
        case 5:
            html+="<a class=\"task-help _help\" href=\"#\">\n" +
                "                        <i class=\"icon icon_nav-question\"></i>\n" +
                "                     </a>\n" +
                "                     <a class=\"task-play _play\" href=\"#\">\n" +
                "                        <svg class=\"lesson-nav-item__icon i_step-8\">\n" +
                "                           <use xlink:href=\"#icon-step-8\"></use>\n" +
                "                        </svg>\n" +
                "                     </a>\n" +
                "\n" +
                "                     <div class=\"test__task-block test__task_active\">\n" +
                "                        <div class=\"test__title\" data-intro=\"Внимательно ознакомьтесь с текстом задания\">\n" +
                "                           <p>Раскраска\n" +
                "                           </p>\n" +
                "                           <p class=\"test__title-small\">\n" +
                "                              Выполни действия, написанные на яблоках, и ты узнаешь,в какой цвет тебе надо раскрасить каждое из них</p>\n" +
                "                        </div>\n" +
                "\n" +
                "                        <div class=\"test-words flex-test flex-test-space-between flex-wrap\">\n" +
                "                           <div class=\"test-words__item\">\n" +
                "                              <div class=\"test-words__content test-border\">\n" +
                "                                 <img class=\"test-words__img\" src=\"img/apple.png\" alt=\"\">" +
                "                                 <span class='apple-number-black'>3+0</span>" +
                "                              </div>\n" +
                "                           </div>\n" +
                "                           <div class=\"test-words__item\">\n" +
                "                              <div class=\"test-words__content test-border\">\n" +
                "                                 <img class=\"test-words__img\" src=\"img/apple.png\" alt=\"\">\n" +
                "                                 <span class='apple-number-black'>4-1</span>" +
                "                              </div>\n" +
                "                           </div>\n" +
                "                           <div class=\"test-words__item\">\n" +
                "                              <div class=\"test-words__content test-border\">\n" +
                "                                 <img class=\"test-words__img\" src=\"img/apple.png\" alt=\"\">\n" +
                "                                 <span class='apple-number-black'>2+1</span>" +
                "                              </div>\n" +
                "                           </div>\n" +
                "                           <div class=\"test-words__item\">\n" +
                "                              <div class=\"test-words__content test-border\">\n" +
                "                                 <img class=\"test-words__img\" src=\"img/apple.png\" alt=\"\">\n" +
                "                                 <span class='apple-number-black'>1+2</span>" +
                "                              </div>\n" +
                "                           </div>\n" +
                "\n" +
                "                           <div class=\"test-words__item\">\n" +
                "                              <div class=\"test-words__content test-border\">\n" +
                "                                 <img class=\"test-words__img\" src=\"img/apple.png\" alt=\"\">\n" +
                "                                 <span class='apple-number-black'>3+1</span>" +
                "                              </div>\n" +
                "\n" +
                "                           </div>\n" +
                "                           <div class=\"test-words__item\">\n" +
                "                              <div class=\"test-words__content test-border\">\n" +
                "                                 <img class=\"test-words__img\" src=\"img/apple.png\" alt=\"\">\n" +
                "                                 <span class='apple-number-black'>5-1</span>" +
                "                              </div>\n" +
                "                           </div>\n" +
                "                           <div class=\"test-words__item\">\n" +
                "                              <div class=\"test-words__content test-border\">\n" +
                "                                 <img class=\"test-words__img\" src=\"img/apple.png\" alt=\"\">\n" +
                "                                 <span class='apple-number-black'>1+1</span>" +
                "                              </div>\n" +
                "                           </div>\n" +
                "                           <div class=\"test-words__item\">\n" +
                "                              <div class=\"test-words__content test-border\">\n" +
                "                                 <img class=\"test-words__img\" src=\"img/apple.png\" alt=\"\">\n" +
                "                                 <span class='apple-number-black'>1+3</span>" +
                "                              </div>\n" +
                "                           </div>\n" +
                "                        </div>\n" +
                "\n" +
                "                        <div class=\"test-choise-block flex-test flex-test-just-even\">\n" +
                "                           <div class=\"test-word__item-block\">\n" +
                "                              <div class=\"test-choise test-choise__red\">\n" +
                "                              </div>\n" +
                "                              <span>2</span>\n" +
                "                           </div>\n" +
                "\n" +
                "                           <div class=\"test-word__item-block\">\n" +
                "                              <div class=\"test-choise test-choise__purple\">\n" +
                "                              </div>\n" +
                "                              <span>3</span>\n" +
                "                           </div>\n" +
                "\n" +
                "                           <div class=\"test-word__item-block\">\n" +
                "                              <div class=\"test-choise test-choise__dark-blue\">\n" +
                "                              </div>\n" +
                "                              <span>4</span>\n" +
                "                           </div>\n" +
                "\n" +
                "                           <div class=\"test-word__item-block\">\n" +
                "                              <div class=\"test-choise test-choise__cancel\">\n" +
                "                                 <span>СБРОС</span>\n" +
                "                              </div>\n" +
                "                           </div>\n" +
                "                        </div>\n" +
                "\n" +
                "\n" +
                "                     </div>";
            $("#testContainer").html(html);
            break;
        case 6:
            renderFindWords($("#testContainer"));
            break;
        case 7:
            html+="<a class=\"task-help _help\" href=\"#\">\n" +
                "                        <i class=\"icon icon_nav-question\"></i>\n" +
                "                     </a>\n" +
                "                     <a class=\"task-play _play\" href=\"#\">\n" +
                "                        <svg class=\"lesson-nav-item__icon i_step-8\">\n" +
                "                           <use xlink:href=\"#icon-step-8\"></use>\n" +
                "                        </svg>\n" +
                "                     </a>\n" +
                "\n" +
                "                     <div class=\"test__task-block test__task_active\">\n" +
                "                        <div class=\"test__title\" data-intro=\"Внимательно ознакомьтесь с текстом задания\">\n" +
                "                           <p>Лабиринт\n" +
                "                           </p>\n" +
                "                           <p class=\"test__title-small\">\n" +
                "                              Помоги обезьянке добраться до бананов</p>\n" +
                "                        </div>\n" +
                "\n" +
                "                        <div class=\"test-words\">\n" +
                "                           <div class=\"test-words__item\">\n" +
                "                              <div class=\"test-words__content tac\">\n" +
                "                                 <img class=\"test-words__img\" src=\"img/labyrint.png\" alt=\"\">\n" +
                "                              </div>\n" +
                "                           </div>\n" +
                "                        </div>\n" +
                "\n" +
                "                     </div>";
            $("#testContainer").html(html);
            break;
        case 8:
            html+="<a class=\"task-help _help\" href=\"#\">\n" +
                "                        <i class=\"icon icon_nav-question\"></i>\n" +
                "                     </a>\n" +
                "                     <a class=\"task-play _play\" href=\"#\">\n" +
                "                        <svg class=\"lesson-nav-item__icon i_step-8\">\n" +
                "                           <use xlink:href=\"#icon-step-8\"></use>\n" +
                "                        </svg>\n" +
                "                     </a>\n" +
                "\n" +
                "                     <div class=\"test__task-block test__task_active\">\n" +
                "                        <div class=\"test__title\" data-intro=\"Внимательно ознакомьтесь с текстом задания\">\n" +
                "                           <p>Ребус\n" +
                "                           </p>\n" +
                "                           <p class=\"test__title-small\">\n" +
                "                              Расставь недостающие картинки</p>\n" +
                "                        </div>\n" +
                "\n" +
                "                        <div class=\"test-words\">\n" +
                "                           <div class=\"test-words__item\">\n" +
                "                              <div class=\"test-words__content tac\">\n" +
                "                                 <table class=\"test-words__rebus-table\">\n" +
                "                                    <tr>\n" +
                "                                       <td>\n" +
                "                                          <img src=\"img/rebus1.png\" alt=\"\">\n" +
                "                                       </td>\n" +
                "                                       <td></td>\n" +
                "                                       <td>\n" +
                "                                          <img src=\"img/rebus2.png\" alt=\"\">\n" +
                "                                       </td>\n" +
                "                                       <td>\n" +
                "                                          <img src=\"img/rebus3.png\" alt=\"\">\n" +
                "                                       </td>\n" +
                "                                    </tr>\n" +
                "                                    <tr>\n" +
                "                                       <td>\n" +
                "                                          <img src=\"img/rebus2.png\" alt=\"\">\n" +
                "                                       </td>\n" +
                "                                       <td>\n" +
                "                                          <img src=\"img/rebus4.png\" alt=\"\">\n" +
                "                                       </td>\n" +
                "                                       <td></td>\n" +
                "                                       <td></td>\n" +
                "                                    </tr>\n" +
                "                                    <tr>\n" +
                "                                       <td></td>\n" +
                "                                       <td></td>\n" +
                "                                       <td></td>\n" +
                "                                       <td>\n" +
                "                                          <img src=\"img/rebus1.png\" alt=\"\">\n" +
                "                                       </td>\n" +
                "                                    </tr>\n" +
                "                                    <tr>\n" +
                "                                       <td>\n" +
                "                                          <img src=\"img/rebus4.png\" alt=\"\">\n" +
                "                                       </td>\n" +
                "                                       <td>\n" +
                "                                          <img src=\"img/rebus1.png\" alt=\"\">\n" +
                "                                       </td>\n" +
                "                                       <td>\n" +
                "                                          <img src=\"img/rebus3.png\" alt=\"\">\n" +
                "                                       </td>\n" +
                "                                       <td></td>\n" +
                "                                    </tr>\n" +
                "                                 </table>\n" +
                "                              </div>\n" +
                "                           </div>\n" +
                "                        </div>\n" +
                "\n" +
                "                        <div class=\"test-choise-block flex-test flex-test-alcenter flex-test-just-even\">\n" +
                "                           <div class=\"test-word__item-block\">\n" +
                "                              <div class=\"test-choise test-choise__rebus\">\n" +
                "                                 <img src=\"img/rebus1.png\" alt=\"\">\n" +
                "                              </div>\n" +
                "                           </div>\n" +
                "\n" +
                "                           <div class=\"test-word__item-block\">\n" +
                "                              <div class=\"test-choise test-choise__rebus\">\n" +
                "                                 <img src=\"img/rebus4.png\" alt=\"\">\n" +
                "                              </div>\n" +
                "                           </div>\n" +
                "\n" +
                "                           <div class=\"test-word__item-block\">\n" +
                "                              <div class=\"test-choise test-choise__rebus\">\n" +
                "                                 <img src=\"img/rebus2.png\" alt=\"\">\n" +
                "                              </div>\n" +
                "                           </div>\n" +
                "\n" +
                "                           <div class=\"test-word__item-block\">\n" +
                "                              <div class=\"test-choise test-choise__rebus\">\n" +
                "                                 <img src=\"img/rebus3.png\" alt=\"\">\n" +
                "                              </div>\n" +
                "                           </div>\n" +
                "\n" +
                "                           <div class=\"test-word__item-block\">\n" +
                "                              <div class=\"test-choise test-choise__cancel\">\n" +
                "                                 <span>СБРОС</span>\n" +
                "                              </div>\n" +
                "                           </div>\n" +
                "                        </div>\n" +
                "\n" +
                "\n" +
                "                     </div>";
            $("#testContainer").html(html);
            break;
        case 9:
            html+="<a class=\"task-help _help\" href=\"#\">\n" +
                "                        <i class=\"icon icon_nav-question\"></i>\n" +
                "                     </a>\n" +
                "                     <a class=\"task-play _play\" href=\"#\">\n" +
                "                        <svg class=\"lesson-nav-item__icon i_step-8\">\n" +
                "                           <use xlink:href=\"#icon-step-8\"></use>\n" +
                "                        </svg>\n" +
                "                     </a>\n" +
                "\n" +
                "                     <div class=\"test__task-block test__task_active\">\n" +
                "                        <div class=\"test__title\" data-intro=\"Внимательно ознакомьтесь с текстом задания\">\n" +
                "                           <p>Ребус\n" +
                "                           </p>\n" +
                "                           <p class=\"test__title-small\">\n" +
                "                              Расставь недостающие картинки</p>\n" +
                "                        </div>\n" +
                "\n" +
                "                        <div class=\"test-words\">\n" +
                "                           <div class=\"test-words__item\">\n" +
                "                              <div class=\"test-words__content tac\">\n" +
                "                                 <table class=\"test-words__rebus-table\">\n" +
                "                                    <tr>\n" +
                "                                       <td>\n" +
                "                                          <img src=\"img/rebus5.png\" alt=\"\">\n" +
                "                                       </td>\n" +
                "                                       <td></td>\n" +
                "                                       <td>\n" +
                "\n" +
                "                                       </td>\n" +
                "                                    </tr>\n" +
                "                                    <tr>\n" +
                "                                       <td>\n" +
                "                                          <img src=\"img/rebus7.png\" alt=\"\">\n" +
                "                                       </td>\n" +
                "                                       <td>\n" +
                "                                          <img src=\"img/rebus6.png\" alt=\"\">\n" +
                "                                       </td>\n" +
                "                                       <td></td>\n" +
                "                                    </tr>\n" +
                "                                    <tr>\n" +
                "                                       <td></td>\n" +
                "                                       <td></td>\n" +
                "                                       <td>\n" +
                "                                          <img src=\"img/rebus7.png\" alt=\"\">\n" +
                "                                       </td>\n" +
                "                                    </tr>\n" +
                "                                 </table>\n" +
                "\n" +
                "                              </div>\n" +
                "                           </div>\n" +
                "                        </div>\n" +
                "\n" +
                "                        <div class=\"test-choise-block flex-test flex-test-alcenter flex-test-just-even\">\n" +
                "\n" +
                "                           <div class=\"test-word__item-block\">\n" +
                "                              <div class=\"test-choise test-choise__rebus\">\n" +
                "                                 <img src=\"img/rebus5.png\" alt=\"\">\n" +
                "                              </div>\n" +
                "                           </div>\n" +
                "\n" +
                "                           <div class=\"test-word__item-block\">\n" +
                "                              <div class=\"test-choise test-choise__rebus\">\n" +
                "                                 <img src=\"img/rebus6.png\" alt=\"\">\n" +
                "                              </div>\n" +
                "                           </div>\n" +
                "                           <div class=\"test-word__item-block\">\n" +
                "                              <div class=\"test-choise test-choise__rebus\">\n" +
                "                                 <img src=\"img/rebus7.png\" alt=\"\">\n" +
                "                              </div>\n" +
                "                           </div>\n" +
                "\n" +
                "                           <div class=\"test-word__item-block\">\n" +
                "                              <div class=\"test-choise test-choise__cancel\">\n" +
                "                                 <span>СБРОС</span>\n" +
                "                              </div>\n" +
                "                           </div>\n" +
                "                        </div>\n" +
                "\n" +
                "\n" +
                "                     </div>";
            $("#testContainer").html(html);
            break;
        case 10:
            html+="<a class=\"task-help _help\" href=\"#\">\n" +
                "                        <i class=\"icon icon_nav-question\"></i>\n" +
                "                     </a>\n" +
                "                     <a class=\"task-play _play\" href=\"#\">\n" +
                "                        <svg class=\"lesson-nav-item__icon i_step-8\">\n" +
                "                           <use xlink:href=\"#icon-step-8\"></use>\n" +
                "                        </svg>\n" +
                "                     </a>\n" +
                "\n" +
                "                     <div class=\"test__task-block test__task_active\">\n" +
                "                        <div class=\"test__title\" data-intro=\"Внимательно ознакомьтесь с текстом задания\">\n" +
                "                           <p>Ребус\n" +
                "                           </p>\n" +
                "                           <p class=\"test__title-small\">\n" +
                "                              Образуйте пары: круг - квадрат</p>\n" +
                "                        </div>\n" +
                "\n" +
                "                        <div class=\"test-words\">\n" +
                "                           <div class=\"test-words__item\">\n" +
                "                              <div class=\"test-words__content tac\">\n" +
                "                                 <img class=\"test-words__img\" src=\"img/rebus-big3.png\" alt=\"\">\n" +
                "                              </div>\n" +
                "                           </div>\n" +
                "                        </div>\n" +
                "\n" +
                "                     </div>";
            $("#testContainer").html(html);
            break;
        case 11:
            html+="<a class=\"task-help _help\" href=\"#\">\n" +
                "                        <i class=\"icon icon_nav-question\"></i>\n" +
                "                     </a>\n" +
                "                     <a class=\"task-play _play\" href=\"#\">\n" +
                "                        <svg class=\"lesson-nav-item__icon i_step-8\">\n" +
                "                           <use xlink:href=\"#icon-step-8\"></use>\n" +
                "                        </svg>\n" +
                "                     </a>\n" +
                "\n" +
                "                     <div class=\"test__task-block test__task_active\">\n" +
                "                        <div class=\"test__title\" data-intro=\"Внимательно ознакомьтесь с текстом задания\">\n" +
                "                           <p>Соединение линий, прокладка маршрута\n" +
                "                           </p>\n" +
                "                           <p class=\"test__title-small\">\n" +
                "                              Соедини начальные буквы слова с соответствующими картинками</p>\n" +
                "                        </div>\n" +
                "\n" +
                "                        <div class=\"test-words\">\n" +
                "                           <div class=\"test-words__item\">\n" +
                "                              <div class=\"test-words__content tac\">\n" +
                "                                 <img class=\"test-words__img\" src=\"img/line2.png\" alt=\"\">\n" +
                "                              </div>\n" +
                "                           </div>\n" +
                "                        </div>\n" +
                "\n" +
                "                     </div>";
            $("#testContainer").html(html);
            break;
        case 12:
            html+="<a class=\"task-help _help\" href=\"#\">\n" +
                "                                <i class=\"icon icon_nav-question\"></i>\n" +
                "                            </a>\n" +
                "                            <a class=\"task-play _play\" href=\"#\">\n" +
                "                                <svg class=\"lesson-nav-item__icon i_step-8\">\n" +
                "                                    <use xlink:href=\"#icon-step-8\"></use>\n" +
                "                                </svg>\n" +
                "                            </a>\n" +
                "\n" +
                "                            <div class=\"test__task-block test__task_active\">\n" +
                "                                <div class=\"test__title\" data-intro=\"Внимательно ознакомьтесь с текстом задания\">\n" +
                "                                    <p>Соединение линий, прокладка маршрута</p>\n" +
                "                                    <p class=\"test__title-small\">\n" +
                "                                        Построй разные отрезки с концами в данных точках так, чтобы на каждом рисунке  было 5 треугольников</p>\n" +
                "                                </div>\n" +
                "\n" +
                "                                <div class=\"test-words flex-test flex-test-space-between\">\n" +
                "\n" +
                "                                    <div class=\"test-words__item\">\n" +
                "                                        <img src=\"img/line3.png\" alt=\"\">\n" +
                "                                    </div>\n" +
                "\n" +
                "                                    <div class=\"test-words__item\">\n" +
                "                                        <img src=\"img/line4.png\" alt=\"\">\n" +
                "                                    </div>\n" +
                "\n" +
                "                                </div>\n" +
                "\n" +
                "                            </div>";
            $("#testContainer").html(html);
            break;
        case 13:
            html+="<a class=\"task-help _help\" href=\"#\">\n" +
                "                                <i class=\"icon icon_nav-question\"></i>\n" +
                "                            </a>\n" +
                "                            <a class=\"task-play _play\" href=\"#\">\n" +
                "                                <svg class=\"lesson-nav-item__icon i_step-8\">\n" +
                "                                    <use xlink:href=\"#icon-step-8\"></use>\n" +
                "                                </svg>\n" +
                "                            </a>\n" +
                "\n" +
                "                            <div class=\"test__task-block test__task_active\">\n" +
                "                                <div class=\"test__title\" data-intro=\"Внимательно ознакомьтесь с текстом задания\">\n" +
                "                                    <p>Мозайка</p>\n" +
                "                                    <p class=\"test__title-small\">\n" +
                "                                        Соберите изоображение из частей</p>\n" +
                "                                </div>\n" +
                "\n" +
                "                                <div class=\"test-words flex-test flex-test-space-between flex-test-alcenter\">\n" +
                "                                    <div class=\"test-words__item w60\">\n" +
                "                                        <div class=\"puzzle-block\">\n" +
                "                                            <div class=\"puzzle-block__item\">\n" +
                "                                                <img src=\"img/puzzle-1.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "                                            <div class=\"puzzle-block__item\">\n" +
                "                                                <img src=\"img/puzzle-2.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "                                            <div class=\"puzzle-block__item\">\n" +
                "                                                <img src=\"img/puzzle-3.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "                                            <div class=\"puzzle-block__item\">\n" +
                "                                                <img src=\"img/puzzle-4.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "                                            <div class=\"puzzle-block__item\">\n" +
                "                                                <img src=\"img/puzzle-5.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "                                            <div class=\"puzzle-block__item\">\n" +
                "                                                <img src=\"img/puzzle-6.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "                                            <div class=\"puzzle-block__item\">\n" +
                "                                                <img src=\"img/puzzle-7.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "                                            <div class=\"puzzle-block__item\">\n" +
                "                                                <img src=\"img/puzzle-8.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "                                            <div class=\"puzzle-block__item\">\n" +
                "                                                <img src=\"img/puzzle-9.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "                                    </div>\n" +
                "\n" +
                "                                    <div class=\"test-words__item w40\">\n" +
                "                                        <img src=\"img/puzzle-main.png\" alt=\"\">\n" +
                "                                    </div>\n" +
                "                                </div>\n" +
                "\n" +
                "                            </div>";
            $("#testContainer").html(html);
            break;
        case 14:
            html+="<a class=\"task-help _help\" href=\"#\">\n" +
                "                                <i class=\"icon icon_nav-question\"></i>\n" +
                "                            </a>\n" +
                "\n" +
                "                            <a class=\"task-play _play\" href=\"#\">\n" +
                "                                <svg class=\"lesson-nav-item__icon i_step-8\">\n" +
                "                                    <use xlink:href=\"#icon-step-8\"></use>\n" +
                "                                </svg>\n" +
                "                            </a>\n" +
                "\n" +
                "                            <div class=\"test__task-block test__task_active\">\n" +
                "                                <div class=\"test__title\" data-intro=\"Внимательно ознакомьтесь с текстом задания\">\n" +
                "                                    <p>Рисуем по точкам</p>\n" +
                "                                    <p class=\"test__title-small\">\n" +
                "                                        Реши примеры и соедини точки</p>\n" +
                "                                </div>\n" +
                "\n" +
                "                                <div class=\"test-words flex-test flex-test-space-between flex-test-alcenter\">\n" +
                "                                    <div class=\"test-words__item flex-test flex-test-space-between w35 arrow\">\n" +
                "                                        <div class=\"test-words__col tar left-col\">\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                8 + 2 - 9 = <input class=\"test-words__input\" value=\"1\" />\n" +
                "                                            </div>\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                17 - 5 = <input class=\"test-words__input\" value=\"12\" />\n" +
                "                                            </div>\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                16 - 9 = <input class=\"test-words__input\" value=\"7\" />\n" +
                "                                            </div>\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                15 - 7 = <input class=\"test-words__input\" value=\"8\" />\n" +
                "                                            </div>\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                8 + 2 - 8 = <input class=\"test-words__input\" value=\"2\" />\n" +
                "                                            </div>\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                17 + 11 = <input class=\"test-words__input\" value=\"28\" />\n" +
                "                                            </div>\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                12 - 2 = <input class=\"test-words__input\" value=\"10\" />\n" +
                "                                            </div>\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                15 + 5 = <input class=\"test-words__input\" value=\"20\" />\n" +
                "                                            </div>\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                16 - 5 = <input class=\"test-words__input\" value=\"11\" />\n" +
                "                                            </div>\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                15 + 4= <input class=\"test-words__input\" value=\"19\" />\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                        <div class=\"test-words__col tar right-col\">\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                8 + 2 - 9 = <input class=\"test-words__input\" value=\"1\" />\n" +
                "                                            </div>\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                17 - 5 = <input class=\"test-words__input\" value=\"12\" />\n" +
                "                                            </div>\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                16 - 9 = <input class=\"test-words__input\" value=\"7\" />\n" +
                "                                            </div>\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                15 - 7 = <input class=\"test-words__input\" value=\"8\" />\n" +
                "                                            </div>\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                8 + 2 - 8 = <input class=\"test-words__input\" value=\"2\" />\n" +
                "                                            </div>\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                17 + 11 = <input class=\"test-words__input\" value=\"28\" />\n" +
                "                                            </div>\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                12 - 2 = <input class=\"test-words__input\" value=\"10\" />\n" +
                "                                            </div>\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                15 + 5 = <input class=\"test-words__input\" value=\"20\" />\n" +
                "                                            </div>\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                16 - 5 = <input class=\"test-words__input\" value=\"11\" />\n" +
                "                                            </div>\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                15 + 4= <input class=\"test-words__input\" value=\"19\" />\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "                                    </div>\n" +
                "\n" +
                "                                    <div class=\"test-words__item w60 tar\">\n" +
                "                                        <img src=\"img/dot-main.png\" alt=\"\">\n" +
                "                                    </div>\n" +
                "                                </div>\n" +
                "\n" +
                "                            </div>";
            $("#testContainer").html(html);
            break;
        case 15:
            html+="<a class=\"task-help _help\" href=\"#\">\n" +
                "                                <i class=\"icon icon_nav-question\"></i>\n" +
                "                            </a>\n" +
                "\n" +
                "                            <a class=\"task-play _play\" href=\"#\">\n" +
                "                                <svg class=\"lesson-nav-item__icon i_step-8\">\n" +
                "                                    <use xlink:href=\"#icon-step-8\"></use>\n" +
                "                                </svg>\n" +
                "                            </a>\n" +
                "\n" +
                "                            <div class=\"test__task-block test__task_active\">\n" +
                "                                <div class=\"test__title\" data-intro=\"Внимательно ознакомьтесь с текстом задания\">\n" +
                "                                    <p>Кроссворд “Птицы”</p>\n" +
                "                                    <p class=\"test__title-small\">\n" +
                "                                        Реши примеры и узнай названия птиц</p>\n" +
                "                                </div>\n" +
                "\n" +
                "                                <div class=\"test-words birds-block flex-test flex-test-space-between\">\n" +
                "                                        <div class=\"test-words__item tac\">\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                <img src=\"img/bird1.png\" alt=\"\">\n" +
                "                                                8 + 2 - 8 = <input class=\"test-words__input\" value=\"2\">\n" +
                "                                            </div>\n" +
                "\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                <img src=\"img/bird2.png\" alt=\"\">\n" +
                "                                                17 - 10 = <input class=\"test-words__input\" value=\"\">\n" +
                "                                            </div>\n" +
                "\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                <img src=\"img/bird3.png\" alt=\"\">\n" +
                "                                                16 - 10 = <input class=\"test-words__input\" value=\"\">\n" +
                "                                            </div>\n" +
                "\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                <img src=\"img/bird4.png\" alt=\"\">\n" +
                "                                                15 - 10 = <input class=\"test-words__input\" value=\"\">\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                        <div class=\"test-words__item tac\">\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                <img src=\"img/bird5.png\" alt=\"\">\n" +
                "                                                14 - 10 - 1 = <input class=\"test-words__input\" value=\"\">\n" +
                "                                            </div>\n" +
                "\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                <img src=\"img/crossword3.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                <img src=\"img/bird6.png\" alt=\"\">\n" +
                "                                                14 - 10 = <input class=\"test-words__input\" value=\"\">\n" +
                "                                            </div>\n" +
                "\n" +
                "                                        </div>\n" +
                "\n" +
                "                                        <div class=\"test-words__item tac\">\n" +
                "                                            <div class=\"test-words__cell\">\n" +
                "                                                <img src=\"img/bird7.png\" alt=\"\">\n" +
                "                                                3 + 7 - 9 = <input class=\"test-words__input\" value=\"\">\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "                                </div>\n" +
                "\n" +
                "                            </div>";
            $("#testContainer").html(html);
            break;
        case 16:
            html+="<a class=\"task-help _help\" href=\"#\">\n" +
                "                                <i class=\"icon icon_nav-question\"></i>\n" +
                "                            </a>\n" +
                "\n" +
                "                            <a class=\"task-play _play\" href=\"#\">\n" +
                "                                <svg class=\"lesson-nav-item__icon i_step-8\">\n" +
                "                                    <use xlink:href=\"#icon-step-8\"></use>\n" +
                "                                </svg>\n" +
                "                            </a>\n" +
                "\n" +
                "                            <div class=\"test__task-block test__task_active\">\n" +
                "                                <div class=\"test__title\" data-intro=\"Внимательно ознакомьтесь с текстом задания\">\n" +
                "                                    <p> Кроссворд  “Персонажи мультфильмов”</p>\n" +
                "                                    <p class=\"test__title-small\">\n" +
                "                                        Разгадайте кроссворд</p>\n" +
                "                                </div>\n" +
                "\n" +
                "                                <div class=\"test-words flex-test flex-test-space-between\">\n" +
                "                                    <div class=\"test-words__item\">\n" +
                "                                        <div class=\"test-words__block-content\">\n" +
                "                                            <div class=\"test-words__block-head js-openbar\">\n" +
                "                                                1. по вертикали <span></span>\n" +
                "                                            </div>\n" +
                "                                            <div class=\"test-words__block-content-item\">\n" +
                "                                                <img src=\"img/crosswords2.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                        <div class=\"test-words__block-content\">\n" +
                "                                            <div class=\"test-words__block-head js-openbar\">\n" +
                "                                                2. по вертикали <span></span>\n" +
                "                                            </div>\n" +
                "                                            <div class=\"test-words__block-content-item\">\n" +
                "                                                <img src=\"img/crosswords2.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                        <div class=\"test-words__block-content\">\n" +
                "                                            <div class=\"test-words__block-head js-openbar\">\n" +
                "                                                3. по вертикали <span></span>\n" +
                "                                            </div>\n" +
                "                                            <div class=\"test-words__block-content-item\">\n" +
                "                                                <img src=\"img/crosswords2.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                        <div class=\"test-words__block-content\">\n" +
                "                                            <div class=\"test-words__block-head js-openbar\">\n" +
                "                                                4. по вертикали <span></span>\n" +
                "                                            </div>\n" +
                "                                            <div class=\"test-words__block-content-item\">\n" +
                "                                                <img src=\"img/crosswords2.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                        <div class=\"test-words__block-content\">\n" +
                "                                            <div class=\"test-words__block-head js-openbar\">\n" +
                "                                                5. по горизонтали <span></span>\n" +
                "                                            </div>\n" +
                "                                            <div class=\"test-words__block-content-item\">\n" +
                "                                                <img src=\"img/crosswords2.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                        <div class=\"test-words__block-content\">\n" +
                "                                            <div class=\"test-words__block-head js-openbar\">\n" +
                "                                                6. по вертикали <span></span>\n" +
                "                                            </div>\n" +
                "                                            <div class=\"test-words__block-content-item\">\n" +
                "                                                <img src=\"img/crosswords2.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                        <div class=\"test-words__block-content\">\n" +
                "                                            <div class=\"test-words__block-head js-openbar\">\n" +
                "                                                7. по горизонтали <span></span>\n" +
                "                                            </div>\n" +
                "                                            <div class=\"test-words__block-content-item\">\n" +
                "                                                <img src=\"img/crosswords2.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                        <div class=\"test-words__block-content\">\n" +
                "                                            <div class=\"test-words__block-head js-openbar\">\n" +
                "                                                8. по горизонтали <span></span>\n" +
                "                                            </div>\n" +
                "                                            <div class=\"test-words__block-content-item\">\n" +
                "                                                <img src=\"img/crosswords2.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                        <div class=\"test-words__block-content\">\n" +
                "                                            <div class=\"test-words__block-head js-openbar\">\n" +
                "                                                9. по горизонтали <span></span>\n" +
                "                                            </div>\n" +
                "                                            <div class=\"test-words__block-content-item\">\n" +
                "                                                <img src=\"img/crosswords2.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                    </div>\n" +
                "\n" +
                "                                    <div class=\"test-words__item w60 tar\">\n" +
                "                                        <img src=\"img/crosswords.png\" alt=\"\">\n" +
                "\n" +
                "                                        <div class=\"test-words__letter-block\">\n" +
                "                                            <span>А</span>\n" +
                "                                            <span>Б</span>\n" +
                "                                            <span>В</span>\n" +
                "                                            <span>Г</span>\n" +
                "                                            <span>Д</span>\n" +
                "                                            <span>Е</span>\n" +
                "                                            <span>Ё</span>\n" +
                "                                            <span>Ж</span>\n" +
                "                                            <span>З</span>\n" +
                "                                            <span>И</span>\n" +
                "                                            <span>Й</span>\n" +
                "                                            <span>К</span>\n" +
                "                                            <span>Л</span>\n" +
                "                                            <span>М</span>\n" +
                "                                            <span>Н</span>\n" +
                "                                            <span>О</span>\n" +
                "                                            <span>П</span>\n" +
                "                                            <span>Р</span>\n" +
                "                                            <span>С</span>\n" +
                "                                            <span>Т</span>\n" +
                "                                            <span>У</span>\n" +
                "                                            <span>Ф</span>\n" +
                "                                            <span>Х</span>\n" +
                "                                            <span>Ц</span>\n" +
                "                                            <span>Ч</span>\n" +
                "                                            <span>Ш</span>\n" +
                "                                            <span>Щ</span>\n" +
                "                                            <span>Ъ</span>\n" +
                "                                            <span>Ы</span>\n" +
                "                                            <span>Ь</span>\n" +
                "                                            <span>Э</span>\n" +
                "                                            <span>Ю</span>\n" +
                "                                            <span>Я</span>\n" +
                "                                        </div>\n" +
                "                                    </div>\n" +
                "                                </div>\n" +
                "\n" +
                "                            </div>";
            $("#testContainer").html(html);

            $('.js-openbar').on('click', function() {

                var accordion__content = $(this).next('.test-words__block-content-item');
                var accordion__block = $(this).parent('.test-words__block-content');

                if (accordion__block.hasClass('content-active')) {
                    accordion__content.slideUp();
                    accordion__block.removeClass('content-active');

                } else {
                    accordion__content.slideDown();
                    accordion__block.addClass('content-active').siblings('.content-active').removeClass('content-active').find('.test-words__block-content-item').slideUp();
                }
            });

            break;
    }
}

