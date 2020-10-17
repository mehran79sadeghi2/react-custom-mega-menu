import React from 'react';

export const megaData = {
    // customLable: (lable) => <div style={{ backgroundColor: 'blue', width: '100%', height: '50px' }}>{lable}</div>,
    // customMenu: (lables) => <div style={{ width: '300px', backgroundColor: 'yellow', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>{lables}</div>,
    // customContainer: (menu) => <div style={{ width: '100%', height: '500px', overflow: 'hidden', borderRadius: '20px', backgroundColor: 'purple', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>{menu}</div>,
    // rtl: true,
    // fillParent: true,
    // lableStyle: {width: '100%', height: '40px', border: '2px solid green', margin: '3px'},
    // containerStyle: {backgroundColor: 'yellow'},
    // menuStyle: {width: '200px', padding: '10px', border: '1px solid black'},
    // renderAll: true,
    menu: [
        {
            lable: 'title 2',
            component: <div>component 2</div>,
            loading: false,

        },
        {
            lable: 'title 3',
            component: <div>component 3</div>,
            loading: false,

        },
        {
            lable: 'title 4',
            component: <div>component 4</div>,
            loading: false,

        },
        {
            lable: 'title 5',
            component: <div>component 5</div>,
            loading: false,

        },
        {
            lable: 'title 6',
            component: <div>component 6</div>,
            loading: false,

        },
        {
            lable: 'title 1',
            component: <div>component 1</div>,
            loading: false,
            megaData: {
                menu: [
                    {
                        lable: 'title 1',
                        component: <div>component 1</div>,
                        loading: false,

                    },
                    {
                        lable: 'title 2',
                        component: <div>component 2</div>,
                        loading: false,

                    },
                    {
                        lable: 'title 3',
                        component: <div>component 3</div>,
                        loading: false,

                    },
                ]
            }

        },
    ]
}