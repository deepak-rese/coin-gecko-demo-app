
const Detail = (props) =>(
    <tr>
        <td>{props.label}</td>
        <td>{props.value}</td>
    </tr>
);

export const DetailList = (props) =>{
    const {details} = props;
    const detailsView = details.map(detail=>(
        <Detail key={detail.label} label={detail.label} value={detail.value}/>
    ));

    return (
        <table className="details-view">
            {detailsView}
        </table>
    );
};
