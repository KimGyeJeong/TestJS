<script>
    import Header from './header.svelte';
    import Footer from './footer.svelte';
    import Main from './main.svelte';

    let name = 'Kim';
    let img_src = 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbGz29o%2FbtrNgcGtBfI%2FbzaUnvh0SXlevptFhvYfwK%2Fimg.png ';
    let src = img_src;

    let str = '절겁다! <strong>스벨트</strong>는 <em>진짜</em> 절겁다!';

    let num = 0;    //state(상태값)

    //기존 변수값에서 1씩 증가
    const increaseNumber = () => num++;

    //기존 변수값에서 1씩 감소
    const decreaseNumber = () => num--;

    //기존 변수값을 0으로 초기화
    // const makeNumberZero = () => {return num = 0;}
    const makeNumberZero = () => num=0;

    ///////////
    // 객체
    let obj = {
        name : 'kim',
        age : 28,
        address : 'seoul',
    }

    ///////////
    // 객체로 이루어진 배열
    let arr_obj = [
        {name : 'kim', age : 28, address : 'seoul'},
        {name : 'lee', age : 29, address : 'busan'},
        {name : 'park', age : 30, address : 'jeju'},
    ]

</script>

<Header></Header>
<Main></Main>

<div>
    <h1>My name is.... {name}</h1>
    <img src="{img_src}"/>
</div>

<div>
    <h5>/////</h5>
    <img {src}/>
</div>

<div>
    <h5>/////</h5>
    {@html str} <br/>
    {str}
</div>

<div>
    <h5>/////</h5>
    <button on:click={increaseNumber}>증가</button>
    <button on:click={decreaseNumber}>감소</button>
    <button on:click={makeNumberZero}>0</button>
    <h1>{num}</h1>
</div>

<div>
    <h5>/////</h5>
    <h1>Name : {obj.name}</h1>
    <h1>AGE : {obj.age}</h1>
    <h1>Address : {obj.address}</h1>
</div>

<div>
    <h5>/////</h5>
    {#each arr_obj as obj}
        <h1>Name : {obj.name}</h1>
        <h1>AGE : {obj.age}</h1>
        <h1>Address : {obj.address}</h1>
        <br/>
    {/each}
</div>

<Footer></Footer>