export const FrontCard = ({key}:{key:string}) => {
    return(
        <div id="frontCard">
            <div className={`containerFrontCard cardF${key}`}>
                <img src='../logo192.png' alt="logo-react"/>
            </div>
        </div>
    )
}