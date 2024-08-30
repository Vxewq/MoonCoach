import Card from '../card'
import './style.scss'

export default function Cards({h1, p,}){
    return <div className="cards">
        <h1>{h1}</h1>
        <p>{p}</p>
        <div className="grid">
            <Card img={'https://s3-alpha-sig.figma.com/img/85ec/ff09/5972cef12c94361b808c6096e0a10417?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OFTCJCEQQluZjRetZLpBAJ82LR9CmIFAPUmQ~DUdaMW8xjhqZ3T95MVQ88RUiVjAS-mWLK01d7ipKmf3uN-LyM0QAiTqbEOqJ5TXhhleNKirhml3DrRWgDm~0smzvpfd5Pgc8NJDQ9-2ojA2ksnMHmV8F4qku92CRmpOS7g5G7xdSXSOtrKLCccyaVp2tYByYz2vAraMoKVYealu8zp~pglKmRveiOEwQrsahKu8rTIdV~S-eU7nI~5-ZOhHlIzA82K46t3iZlFq5Iqw2Ij9xurbwzTeZdAx8CqF6-U43dlZuAJv-yR9L-OJejPzlDyAhcE4dEVCqphhHMqlfQt2Rw__'} desc={'Home Version 1'}/>
            <Card img={'https://s3-alpha-sig.figma.com/img/85ec/ff09/5972cef12c94361b808c6096e0a10417?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OFTCJCEQQluZjRetZLpBAJ82LR9CmIFAPUmQ~DUdaMW8xjhqZ3T95MVQ88RUiVjAS-mWLK01d7ipKmf3uN-LyM0QAiTqbEOqJ5TXhhleNKirhml3DrRWgDm~0smzvpfd5Pgc8NJDQ9-2ojA2ksnMHmV8F4qku92CRmpOS7g5G7xdSXSOtrKLCccyaVp2tYByYz2vAraMoKVYealu8zp~pglKmRveiOEwQrsahKu8rTIdV~S-eU7nI~5-ZOhHlIzA82K46t3iZlFq5Iqw2Ij9xurbwzTeZdAx8CqF6-U43dlZuAJv-yR9L-OJejPzlDyAhcE4dEVCqphhHMqlfQt2Rw__'} desc={'Home Version 1'}/>
            <Card img={'https://s3-alpha-sig.figma.com/img/85ec/ff09/5972cef12c94361b808c6096e0a10417?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OFTCJCEQQluZjRetZLpBAJ82LR9CmIFAPUmQ~DUdaMW8xjhqZ3T95MVQ88RUiVjAS-mWLK01d7ipKmf3uN-LyM0QAiTqbEOqJ5TXhhleNKirhml3DrRWgDm~0smzvpfd5Pgc8NJDQ9-2ojA2ksnMHmV8F4qku92CRmpOS7g5G7xdSXSOtrKLCccyaVp2tYByYz2vAraMoKVYealu8zp~pglKmRveiOEwQrsahKu8rTIdV~S-eU7nI~5-ZOhHlIzA82K46t3iZlFq5Iqw2Ij9xurbwzTeZdAx8CqF6-U43dlZuAJv-yR9L-OJejPzlDyAhcE4dEVCqphhHMqlfQt2Rw__'} desc={'Home Version 1'}/>
        </div>
    </div>
}