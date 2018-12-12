function babysitterPay(arv, dept, bed) {
    //assign all times to ordinals from 1-12
    const hours = {
        5: 1,
        6: 2,
        7: 3,
        8: 4,
        9: 5,
        10: 6,
        11: 7,
        12: 8,
        1: 9,
        2: 10,
        3: 11,
        4: 12
    };
    const midnight = 8;

    //set pre-bedtime pay to (bed - arv) * 10
    const preBed = (hours[bed] - hours[arv]) * 10;

    //set post-bedtime pay to (dept - bed) * 6
    const postBed = (hours[dept] - hours[bed]) * 6;
    
    //set post-midnight pay to (dept - mid) * 2--if (dept - mid) > 0
    const postMid = hours[dept] - midnight < 0 ? 0 : (hours[dept] - midnight) * 2;

    return preBed + postBed + postMid;
}
