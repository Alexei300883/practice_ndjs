import "./Calendar.css";

const Calendar = ({ param }) => {
  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{param.day}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{param.date}</div>
          <div className="ui-datepicker-material-month">{`${param.month}я`}</div>
          <div className="ui-datepicker-material-year">{param.year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{`${param.month}ь`}</span>&nbsp;
          <span className="ui-datepicker-year">{param.year}</span>
        </div>

        <table className="ui-datepicker-calendar">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="ui-datepicker-week-end" />
            <col className="ui-datepicker-week-end" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" title="Понедельник">
                Пн
              </th>
              <th scope="col" title="Вторник">
                Вт
              </th>
              <th scope="col" title="Среда">
                Ср
              </th>
              <th scope="col" title="Четверг">
                Чт
              </th>
              <th scope="col" title="Пятница">
                Пт
              </th>
              <th scope="col" title="Суббота">
                Сб
              </th>
              <th scope="col" title="Воскресенье">
                Вс
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="ui-datepicker-other-month">26</td>
              <td className="ui-datepicker-other-month">27</td>
              <td className="ui-datepicker-other-month">28</td>
              <td className="ui-datepicker-other-month">29</td>
              <td className="ui-datepicker-other-month">30</td>
              <td>1</td>
              <td>2</td>
            </tr>
            <tr>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
            </tr>
            <tr>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
            </tr>
            <tr>
              <td>17</td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
            </tr>
            <tr>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td className={param.date === 27 ?"ui-datepicker-today" : ""}>27</td>
              <td className={param.date === 28 ?"ui-datepicker-today" : ""}>28</td>
              <td className={param.date === 29 ?"ui-datepicker-today" : ""}>29</td>
              <td className={param.date === 30 ?"ui-datepicker-today" : ""}>30</td>
            </tr>
            <tr>
              <td className={param.date === 31 ?"ui-datepicker-today" : ""}>31</td>
              <td className="ui-datepicker-other-month">1</td>
              <td className="ui-datepicker-other-month">2</td>
              <td className="ui-datepicker-other-month">3</td>
              <td className="ui-datepicker-other-month">4</td>
              <td className="ui-datepicker-other-month">5</td>
              <td className="ui-datepicker-other-month">6</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Calendar;
