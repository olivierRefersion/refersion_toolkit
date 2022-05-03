import { Button } from ".";
import { useLocation, useNavigate } from "react-router-dom"

export default function Results() {
    const { state } = useLocation();
    const navigate = useNavigate();

    const goback = () => {
        navigate(state.prevpage)
    }
    //console.log(state.data.responseObject.successObject.successInfoArray);
    const failedInfo = state.data.responseObject.failedObject.failedInfoArray;
    const successInfo = state.data.responseObject.successObject.successInfoArray;
    return (
        <main>
            <div className="container">
                <h2 className="results">Success List</h2>
                <table className="results-table">
                    <thead>
                        <th>Row #</th>
                        <th>Result</th>
                    </thead>
                {successInfo.map((successInfoMessage, i) =>
                <tr>
                    <td>{i}</td><td>{successInfoMessage}</td>
                    </tr>
                )}
                </table>
                <hr />

                <h2 class="results">Failed List</h2>
                <table className="results-table">
                    <tr>
                        <th>Row #</th>
                        <th>Result</th>
                    </tr>
                {failedInfo.map((failedInfoMessage, i) =>
                <tr>
                    <td>{i}</td><td>{failedInfoMessage}</td>
                    </tr>
                )}
                </table>
                <Button classes='primary' label='Start another upload' onClick={goback}/>
            </div>
        </main>
    )
}