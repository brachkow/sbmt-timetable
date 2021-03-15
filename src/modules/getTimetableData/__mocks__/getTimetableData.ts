const getTimetableData = () => {
  return `<table class="programsTab"><tr><th>Время</th><th>Подгруппа</th><th>Дисциплина</th><th>Аудитория</th></tr><tr><td colspan="4"><strong>ПОНЕДЕЛЬНИК, 31.08.2020</strong></td></tr><tr><td colspan="4">Нет занятий</td></tr><tr><td colspan="4"><strong>ВТОРНИК, 01.09.2020</strong></td></tr><tr><td>08:30</td><td></td><td>Основы маркетинга (Лекция). Лесниченко-Роговская Мария Владимировна</td><td>Московская 5, ауд. Вебинар 401а</td></tr><tr><td>10:00</td><td></td><td>Основы маркетинга (Лекция). Лесниченко-Роговская Мария Владимировна</td><td>Московская 5, ауд. Вебинар 401а</td></tr><tr><td>11:50</td><td></td><td>Экономика организации (Лекция). Еремушкина Светлана Владимировна</td><td>Московская 5, ауд. Вебинар д4.</td></tr><tr><td>13:20</td><td></td><td>Экономика организации (Лекция). Еремушкина Светлана Владимировна</td><td>Московская 5, ауд. Вебинар д4.</td></tr><tr><td colspan="4"><strong>СРЕДА, 02.09.2020</strong></td></tr><tr><td>08:30</td><td></td><td>Информационные ресурсы (Лекция). Рыбакова Элла Вадимовна</td><td>Московская 5, ауд. Вебинар д3.</td></tr><tr><td>10:00</td><td></td><td>Высшая математика (Лекция). Минченков Юрий Владимирович</td><td>Московская 5, ауд. Вебинар д3.</td></tr><tr><td>11:50</td><td></td><td>Высшая математика (Лекция). Минченков Юрий Владимирович</td><td>Московская 5, ауд. Вебинар д3.</td></tr><tr><td colspan="4"><strong>ЧЕТВЕРГ, 03.09.2020</strong></td></tr><tr><td>11:50</td><td>3 подгруппа</td><td>Деловой иностранный язык (Практика). Остапук Светлана Ивановна (S. Ostapuk)</td><td>Московская 15а , ауд. 22 </td></tr><tr><td>11:50</td><td>4 подгруппа</td><td>Деловой иностранный язык (Практика). Подлуцкая Викторина Витальевна (V. Podlutskaya)</td><td>Московская 15а , ауд. 23 </td></tr><tr><td>13:20</td><td>3 подгруппа</td><td>Деловой иностранный язык (Практика). Остапук Светлана Ивановна (S. Ostapuk)</td><td>Московская 15а , ауд. 22 </td></tr><tr><td>13:20</td><td>4 подгруппа</td><td>Деловой иностранный язык (Практика). Подлуцкая Викторина Витальевна (V. Podlutskaya)</td><td>Московская 15а , ауд. 23 </td></tr><tr><td colspan="4"><strong>ПЯТНИЦА, 04.09.2020</strong></td></tr><tr><td>08:30</td><td></td><td>Национальная экономика Беларуси (Лекция). Костюкова Елена Николаевна</td><td>Московская 5, ауд. Вебинар д3.</td></tr><tr><td>10:00</td><td></td><td>Национальная экономика Беларуси (Лекция). Костюкова Елена Николаевна</td><td>Московская 5, ауд. Вебинар д3.</td></tr><tr><td>11:50</td><td></td><td>Бухгалтерский учет, анализ и аудит (Лекция). Гончеренок Диана Георгиевна</td><td>Московская 5, ауд. Вебинар 401а</td></tr><tr><td>13:20</td><td></td><td>Бухгалтерский учет, анализ и аудит (Лекция). Гончеренок Диана Георгиевна</td><td>Московская 5, ауд. Вебинар 401а</td></tr><tr><td colspan="4"><strong>СУББОТА, 05.09.2020</strong></td></tr><tr><td>14:00</td><td></td><td>Физическая культура (Практика). Омелюсик Ольга Валентиновна</td><td>Обойная, 7, ауд. 106 </td></tr></table><div>31.08.20&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/07-09-2020/')">07.09.20</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/14-09-2020/')">14.09.20</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/21-09-2020/')">21.09.20</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/28-09-2020/')">28.09.20</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/05-10-2020/')">05.10.20</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/12-10-2020/')">12.10.20</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/19-10-2020/')">19.10.20</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/26-10-2020/')">26.10.20</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/02-11-2020/')">02.11.20</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/09-11-2020/')">09.11.20</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/16-11-2020/')">16.11.20</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/23-11-2020/')">23.11.20</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/30-11-2020/')">30.11.20</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/07-12-2020/')">07.12.20</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/14-12-2020/')">14.12.20</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/21-12-2020/')">21.12.20</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/28-12-2020/')">28.12.20</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/04-01-2021/')">04.01.21</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/11-01-2021/')">11.01.21</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/18-01-2021/')">18.01.21</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/25-01-2021/')">25.01.21</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/01-02-2021/')">01.02.21</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/08-02-2021/')">08.02.21</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/15-02-2021/')">15.02.21</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/22-02-2021/')">22.02.21</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/01-03-2021/')">01.03.21</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/08-03-2021/')">08.03.21</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/15-03-2021/')">15.03.21</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/22-03-2021/')">22.03.21</a>&nbsp;&nbsp; <a href="javascript:void(0);" OnClick="loadTimetable('/group/952/29-03-2021/')">29.03.21</a>&nbsp;&nbsp; </div>`;
};

export default getTimetableData;
