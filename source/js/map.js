const Map = () => {
    const myMap = new ymaps.Map(`map`, {
        center: [54.954786, 38.005537],
        zoom: 14,
        controls: []
    });

    const myPlacemark = new ymaps.Placemark([54.954786, 38.005537], null,{
      iconLayout: 'default#image',
      iconImageHref: "img/pin.png",
      iconImageSize: [40, 57],
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
};

export default Map;
