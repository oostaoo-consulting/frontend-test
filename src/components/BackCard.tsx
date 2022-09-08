
export const BackCard = ({key}:{key:string}) => {
    console.log(key)
    return(
        <div id="backCard">
            <div className={`containerBackCard card${key}`}>

            </div>
        </div>
    )
}