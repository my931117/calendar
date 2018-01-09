import {mount} from 'rnzyme';
import CalendarHeader from '../CalendarHeader'


//测试点击上一月是否起作用 
it('prev month click',function () {    
    let CalendarHeader = mount(<CalendarHeader/>);      
    let prevClick = CalendarHeader.find("LeftCheck").simulate('click');
    expect(prevClick).to.equal('CalendarHeader'); 
});

  
