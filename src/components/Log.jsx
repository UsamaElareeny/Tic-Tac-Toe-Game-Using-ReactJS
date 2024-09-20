export default function Log({logInfo, ...props}){
    return (
        <ol {...props}>
            {logInfo.map((cell) => <li key={`${cell.square.row}${cell.square.col}`}>Player {cell.player} Selected ({cell.square.row}, {cell.square.col})</li>)}
        </ol>
    );
}