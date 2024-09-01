function Menu(props) {
	const clickHandler = (event) => {
    const name = event.target.value;
    props.onSelectVideo(name);
  };
  
  return (
		  <form>
			  <input type="radio" name="src" value="fast" onClick={clickHandler}/> fast
			  <input type="radio" name="src" value="slow" onClick={clickHandler}/> slow
			  <input type="radio" name="src" value="cute" onClick={clickHandler}/> cute
			  <input type="radio" name="src" value="eek" onClick={clickHandler}/> eek
		  </form>
		);
};

export default Menu;