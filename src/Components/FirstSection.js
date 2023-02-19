function FirstSection(){
    const [imgs, setImgs] = useState(
        [
           mobile1,
           mobile2,
           mobile3,
           logo1,
           logo2,
           logo3,
        ]
    )
const change=()=>{
    {imgs.map(
        (ele) => {
            return (
                <div className="display-img">
                    <img src={ele} alt="" />
                </div>
            )
        }
    )}
}
}