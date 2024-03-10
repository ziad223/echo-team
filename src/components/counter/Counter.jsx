import './counter.css';
import NumberCounter from 'number-counter';

const Counter = () => {
  return (
    <div className='counter container'>
        <div className="counter-content">
        <div>
        <NumberCounter start = {0} end = {1000} delay ={3} preFix = '+' className = 'number'>

        </NumberCounter>
        <h2>Students</h2>
        </div>
        <div>
        <NumberCounter start = {0} end = {500} delay ={3} preFix = '+' className = 'number'>

        </NumberCounter>
        <h2>Instrutors</h2>
        </div>
        <div>
        <NumberCounter start = {0} end = {200} delay ={3} preFix = '+' className = 'number'>

        </NumberCounter>
        <h2>Rooms</h2>
        </div>
        <div>
        <NumberCounter start = {0} end = {100} delay ={3} preFix = '%' className = 'number'>

</NumberCounter>
        <h2>Successfully</h2>
        </div>
        </div>
      
    </div>
  )
}

export default Counter
