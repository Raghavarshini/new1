import './Home.css';
import idea from './../idea.png';
import drop from './../drop.png';
import co2 from './../co2-cloud.png';
import graph from './../performance.png';



{/* <img src="" alt=""></img> */}
function Home() {
    
    return (
        <div className='home_body'>
            <div className='flex-container'>
                <div className='flex-box'>
                    <table>
                        <tr>
                            <th rowspan="2"><img classname="icons" src={graph} alt="icons"></img></th>
                            <td classname="table-data">Normal</td>
                        </tr>
                        <tr>
                            <td className='table-data-mini'>performance </td>
                        </tr>
                    </table>
                </div>
                <div className='flex-box'>
                    <table>
                        <tr>
                            <th rowspan="2"><img classname="icons" src={idea}></img></th>
                            <td classname="table-data">500</td>
                        </tr>
                        <tr>
                            <td className='table-data-mini'>lux</td>
                        </tr>
                    </table>
                </div>
                <div className='flex-box'>
                    <table>
                        <tr>
                            <th rowspan="2"><img classname="icons" src={drop}></img></th>
                            <td classname="table-data">20%</td>
                        </tr>
                        <tr>
                            <td className='table-data-mini'>Humidity</td>
                        </tr>
                    </table>                
                </div>
                <div className='flex-box'>
                <table>
                        <tr>
                            <th rowspan="2"><img classname="icons" src={co2}></img></th>
                            <td classname="table-data">2.3</td>
                        </tr>
                        <tr>
                            <td className='table-data-mini'>cu. metric ton</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div>
                <div></div>
            </div>
        </div>
    )
}
export default Home 