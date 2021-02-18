export const HeaderContent = {
    desktop: {
        start: [
            {
                title: 'خرید',
                url: 'buy',
                field: 'buy',
                blogContentState: true,
                subMenu: [
                    {
                        title: '',
                        type: 'regular',
                        subMenu: [
                            // { //"find me a home" -> (landing)
                            //     text: 'خانه خود را بیابید',
                            //     link: '',
                            // },
                            // {
                            //     text: 'تخمین قیمت خانه',
                            //     link: 'smart-real-estate-valuations',
                            // },
                            // {
                            //     text: 'محاسبه حق کمیسیون',
                            //     link: 'commission-calculator',
                            // },
                            {
                                text: 'جستجو روی نقشه',
                                link: 'map',
                                params: {
                                    type: 'listing',
                                    locations: 'c_2301021576',
                                    sort: 'date,DESC',
                                    subType: 'buy',
                                    smartSearch: true
                                }
                            },
                            {
                                text: 'نقشه حرارتی قیمت',
                                link: '',
                            },
                        ]
                    },
                    {
                        title: 'خرید انواع ملک',
                        type: 'light',
                        subMenu: [
                            {
                                text: 'خرید آپارتمان مسکونی',
                                link: 'buy-apartment/tehran',
                                params: {
                                    locations: 'c_2301021576',
                                    subType: 'buy',
                                    type: 'listing',
                                    sort: 'date,DESC',
                                    apartment: true,
                                    utilityType: 'residential',
                                }
                            },
                            {
                                text: 'خرید خانه ویلایی',
                                link: 'buy-villa/tehran',
                                params: {
                                    locations: 'c_2301021576',
                                    subType: 'buy',
                                    type: 'listing',
                                    sort: 'date,DESC',
                                    villa: true,
                                }
                            },
                            {
                                text: 'خرید واحد اداری',
                                link: 'buy-office/tehran',
                                params: {
                                    locations: 'c_2301021576',
                                    subType: 'buy',
                                    type: 'listing',
                                    sort: 'date,DESC',
                                    utilityType: 'office',
                                }
                            },
                            {
                                text: 'خرید واحد تجاری',
                                link: 'buy-commercial/tehran',
                                params: {
                                    locations: 'c_2301021576',
                                    subType: 'buy',
                                    type: 'listing',
                                    sort: 'date,DESC',
                                    utilityType: 'commercial',
                                }
                            },
                            {
                                text: 'خرید زمین کلنگی',
                                link: 'buy-land/tehran',
                                params: {
                                    locations: 'c_2301021576',
                                    subType: 'buy',
                                    type: 'listing',
                                    sort: 'date,DESC',
                                    utilityType: 'residential',
                                    land: true,
                                }
                            }
                        ]
                    },
                    {
                        title: 'خرید ملک در محلات منتخب',
                        type: 'light',
                        subMenu: [
                            {
                                text: 'خرید آپارتمان در تهران پارس',
                                link: 'buy-apartment/tehran-tehranpars',
                            },
                            {
                                text: 'خرید آپارتمان در پونک',
                                link: 'buy-apartment/tehran-punak',
                            },
                            {
                                text: 'خرید آپارتمان در شهرک غرب',
                                link: 'buy-apartment/tehran-shahrak_qarb',
                            },
                            {
                                text: 'خرید آپارتمان در مرزداران',
                                link: 'buy-apartment/tehran-marzdaran',
                            },
                            {
                                text: 'خرید آپارتمان در سعادت آباد',
                                link: 'buy-apartment/tehran-saadat_abad',
                            },
                        ]
                    },
                ]
            },
            {
                title: 'رهن و اجاره',
                url: 'rent',
                field: 'rent',
                blogContentState: true,
                subMenu: [
                    {
                        title: '',
                        type: 'regular',
                        subMenu: [
                            // {
                            //     text: 'محاسبه کمیسیون',
                            //     link: 'commission-calculator',
                            // },
                            // {
                            //     text: 'تبدیل رهن و اجاره',
                            //     link: '',
                            // },
                            {
                                text: 'جستجو روی نقشه',
                                link: 'map',
                                params: {
                                    type: 'listing',
                                    locations: 'c_2301021576',
                                    sort: 'date,DESC',
                                    subType: 'rent',
                                    smartSearch: true
                                }
                            },
                            {
                                text: 'نقشه حرارتی قیمت',
                                link: '',
                            }
                        ]
                    },
                    {
                        title: 'رهن و اجاره انواع ملک',
                        type: 'light',
                        subMenu: [
                            {
                                text: 'رهن و اجاره آپارتمان مسکونی',
                                link: 'rent-apartment/tehran',
                                params: {
                                    locations: 'c_2301021576',
                                    subType: 'rent',
                                    type: 'listing',
                                    sort: 'date,DESC',
                                    apartment: true,
                                    utilityType: 'residential',
                                }
                            },
                            {
                                text: 'رهن و اجاره خانه ویلایی',
                                link: 'rent-villa/tehran',
                                params: {
                                    locations: 'c_2301021576',
                                    subType: 'rent',
                                    type: 'listing',
                                    sort: 'date,DESC',
                                    villa: true,
                                }
                            },
                            {
                                text: 'رهن کامل آپارتمان مسکونی',
                                link: 'rent-apartment/tehran',
                                params: {
                                    locations: 'c_2301021576',
                                    subType: 'rent',
                                    type: 'listing',
                                    sort: 'date,DESC',
                                    depositOnly: true,
                                }
                            },
                            {
                                text: 'اجاره واحد اداری',
                                link: 'rent-office/tehran',
                                params: {
                                    locations: 'c_2301021576',
                                    subType: 'rent',
                                    type: 'listing',
                                    sort: 'date,DESC',
                                    utilityType: 'office',
                                }
                            },
                            {
                                text: 'اجاره واحد تجاری',
                                link: 'rent-commercial/tehran',
                                params: {
                                    locations: 'c_2301021576',
                                    subType: 'rent',
                                    type: 'listing',
                                    sort: 'date,DESC',
                                    utilityType: 'commercial',
                                }
                            }
                        ]
                    },
                    {
                        title: 'رهن و اجاره ملک در محلات منتخب',
                        type: 'light',
                        subMenu: [
                            {
                                text: 'اجاره خانه و آپارتمان در تهران پارس',
                                link: 'rent-apartment/tehran-tehranpars',
                            },
                            {
                                text: 'اجاره خانه و آپارتمان در پونک',
                                link: 'rent-apartment/tehran-punak',
                            },
                            {
                                text: 'اجاره خانه و آپارتمان در شهرک غرب',
                                link: 'rent-apartment/tehran-shahrak_qarb',
                            },
                            {
                                text: 'اجاره خانه و  آپارتمان در مرزداران',
                                link: 'rent-apartment/tehran-marzdaran',
                            },
                            {
                                text: 'اجاره خانه و آپارتمان در سعادت آباد',
                                link: 'rent-apartment/tehran-saadat_abad',
                            }
                        ]
                    },
                ]
            },
            // {
            //     title: 'پروژه‌های ساختمانی',
            //     url: 'project',
            //     field: 'project',
            //     blogContentState: false
            // },
            {
                title: 'قیمت خانه شما',
                url: 'smart-real-estate-valuations',
                field: 'avm',
                blogContentState: true,
                subMenu: [
                    {
                        title: '',
                        type: 'regular',
                        subMenu: [
                            {
                                text: 'قیمت خانه خود را تخمین بزنید',
                                link: 'smart-real-estate-valuations',
                            },
                            {
                                text: 'اطلاعات بازار مسکن و فرصت‌های سرمایه گذاری',
                                link: 'housing-market-insight',
                            }
                        ]
                    },
                    {
                        title: 'اطلاعات بازار مسکن شهرها',
                        type: 'light',
                        subMenu: [
                            {
                                text: 'اطلاعات بازار مسکن در شهر تهران',
                                link: 'housing-market-insight/city',
                                params: {
                                    cityId: '2301021576'
                                }

                            },
                            {
                                text: 'اطلاعات بازار مسکن در شهر کرج',
                                link: 'housing-market-insight/city',
                                params: {
                                    cityId: '3001011590'
                                }

                            }
                        ]
                    },
                    {
                        title: 'اطلاعات بازار مسکن مناطق',
                        type: 'light',
                        subMenu: [
                            {
                                text: 'اطلاعات بازار مسکن در منطقه 1',
                                link: 'housing-market-insight/region',
                                params: {
                                    cityId: '2301021576',
                                    regionId: '2301021601'
                                }
                            },
                            {
                                text: 'اطلاعات بازار مسکن در منطقه 4',
                                link: 'housing-market-insight/region',
                                params: {
                                    cityId: '2301021576',
                                    regionId: '2301021604'
                                }
                            },
                            {
                                text: 'اطلاعات بازار مسکن در منطقه 5',
                                link: 'housing-market-insight/region',
                                params: {
                                    cityId: '2301021576',
                                    regionId: '2301021605'
                                }
                            },
                            {
                                text: 'اطلاعات بازار مسکن در منطقه 12',
                                link: 'housing-market-insight/region',
                                params: {
                                    cityId: '2301021576',
                                    regionId: '2301021612'
                                }
                            },
                            {
                                text: 'اطلاعات بازار مسکن در منطقه 22',
                                link: 'housing-market-insight/region',
                                params: {
                                    cityId: '2301021576',
                                    regionId: '2301022226'
                                }
                            }
                        ]
                    }
                ]
            },
            {
                title: 'آژانس‌های املاک',
                url: 'real-estate-agencies',
                field: 'agency',
                blogContentState: true,
                subMenu: [
                    {
                        title: 'بدنبال مشاور املاک هستید',
                        type: 'light',
                        subMenu: [
                            {
                                text: 'لیست آژانس‌های همکار',
                                link: 'real-estate-agencies/tehran',
                                params: {
                                    locations: 'c_2301021576',
                                    type: 'agency',
                                    sort: 'kilid,DESC'
                                }
                            },
                            {
                                text: 'آژانس‌های املاک تهران پارس',
                                link: 'real-estate-agencies/tehran-tehranpars',
                                params: {
                                    locations: 'c_2301021576-l_37',
                                    type: 'agency',
                                    sort: 'kilid,DESC'
                                }
                            },
                            {
                                text: 'آژانس‌های املاک پونک',
                                link: 'real-estate-agencies/tehran-punak',
                                params: {
                                    locations: 'c_2301021576-l_45',
                                    type: 'agency',
                                    sort: 'kilid,DESC'
                                }
                            },
                            {
                                text: 'آژانس‌های املاک شهرک غرب',
                                link: 'real-estate-agencies/tehran-shahrak_qarb',
                                params: {
                                    locations: 'c_2301021576-l_14',
                                    type: 'agency',
                                    sort: 'kilid,DESC'
                                }
                            },
                            {
                                text: 'آژانس‌های املاک سعادت آباد',
                                link: 'real-estate-agencies/tehran-saadat_abad',
                                params: {
                                    locations: 'c_2301021576-l_11',
                                    type: 'agency',
                                    sort: 'kilid,DESC'
                                }
                            }
                        ]
                    },
                    {
                        title: 'مشاورین املاک هستید',
                        type: 'light',
                        subMenu: [
                            {
                                text: 'مشاور مستقل',
                                link: 'agents',
                            },
                            {
                                text: 'سامانه مشاورین املاک',
                                link: 'pro',
                            },
                            // {
                            //     text: 'نحوه همکاری با کیلید',
                            //     link: '',
                            // },
                            {
                                text: 'ورود به سامانه مشاورین املاک',
                                externalLink: 'https://pro.kilid.com',
                            }
                        ]
                    }
                ]
            },
        ],
        end: [
            // {
            //     title: 'راهکارهای کیلید',
            //     url: 'campaign/kilidkon',
            //     field: 'kilidkon',
                // subMenu: [
                //     {
                        // title: '',
                        // svgLogo: "\n" +
                        //     "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"98.233\" height=\"22\" viewBox=\"0 0 98.233 22\">\n" +
                        //     "  <defs>\n" +
                        //     "    <clipPath id=\"pro-logo-clip-path\">\n" +
                        //     "      <rect id=\"Rectangle_1578\" data-name=\"Rectangle 1578\" width=\"98.233\" height=\"22\"/>\n" +
                        //     "    </clipPath>\n" +
                        //     "  </defs>\n" +
                        //     "  <g id=\"pro\" transform=\"translate(-12 -9.06)\">\n" +
                        //     "    <g id=\"Group_3432\" data-name=\"Group 3432\" transform=\"translate(12 9.06)\" clip-path=\"url(#pro-logo-clip-path)\">\n" +
                        //     "      <path id=\"Path_5491\" data-name=\"Path 5491\" d=\"M107.449,12.283a3.23,3.23,0,0,0-3.288-3.173h-37.2a13.19,13.19,0,0,1,3.457,18.312,13.788,13.788,0,0,1-3.625,3.572h37.434a3.237,3.237,0,0,0,3.236-3.236V12.346Z\" transform=\"translate(-9.226 -9.057)\" fill=\"#003d73\"/>\n" +
                        //     "    </g>\n" +
                        //     "    <g id=\"Group_3433\" data-name=\"Group 3433\" transform=\"translate(12 9.06)\" clip-path=\"url(#pro-logo-clip-path)\">\n" +
                        //     "      <path id=\"Path_5492\" data-name=\"Path 5492\" d=\"M43.108,14.78A1.4,1.4,0,0,0,41.69,16.2V29.352a1.363,1.363,0,0,0,1.418,1.366A1.4,1.4,0,0,0,44.527,29.3V16.2a1.412,1.412,0,0,0-1.418-1.418\" transform=\"translate(-10.497 -8.77)\" fill=\"#3f3938\"/>\n" +
                        //     "    </g>\n" +
                        //     "    <g id=\"Group_3434\" data-name=\"Group 3434\" transform=\"translate(12 9.06)\" clip-path=\"url(#pro-logo-clip-path)\">\n" +
                        //     "      <path id=\"Path_5493\" data-name=\"Path 5493\" d=\"M32.308,14.78A1.44,1.44,0,0,0,30.89,16.2V29.3a1.418,1.418,0,1,0,2.837,0V16.2a1.4,1.4,0,0,0-1.418-1.418\" transform=\"translate(-11.044 -8.77)\" fill=\"#3f3938\"/>\n" +
                        //     "    </g>\n" +
                        //     "    <g id=\"Group_3435\" data-name=\"Group 3435\" transform=\"translate(12 9.06)\" clip-path=\"url(#pro-logo-clip-path)\">\n" +
                        //     "      <path id=\"Path_5494\" data-name=\"Path 5494\" d=\"M24.418,11.9h3.173a1.418,1.418,0,1,0,0-2.837H24.418a10.989,10.989,0,0,0-9.582,5.621v-4.2a1.418,1.418,0,0,0-2.837,0V29.642a1.418,1.418,0,1,0,2.837,0V25.46a10.954,10.954,0,0,0,9.582,5.6h3.173a1.418,1.418,0,0,0,0-2.837H24.418a8.163,8.163,0,1,1,0-16.327\" transform=\"translate(-12 -9.06)\" fill=\"#3f3938\"/>\n" +
                        //     "    </g>\n" +
                        //     "    <g id=\"Group_3436\" data-name=\"Group 3436\" transform=\"translate(12 9.06)\" clip-path=\"url(#pro-logo-clip-path)\">\n" +
                        //     "      <path id=\"Path_5495\" data-name=\"Path 5495\" d=\"M37.708,9.06a1.4,1.4,0,0,0-1.418,1.418V29.642a1.418,1.418,0,1,0,2.837,0V10.478A1.406,1.406,0,0,0,37.708,9.06\" transform=\"translate(-10.77 -9.06)\" fill=\"#3f3938\"/>\n" +
                        //     "    </g>\n" +
                        //     "    <g id=\"Group_3437\" data-name=\"Group 3437\" transform=\"translate(12 9.06)\" clip-path=\"url(#pro-logo-clip-path)\">\n" +
                        //     "      <path id=\"Path_5496\" data-name=\"Path 5496\" d=\"M58.766,9.06H48.5a1.4,1.4,0,0,0-1.418,1.418v12.7a1.472,1.472,0,0,0,1.25,1.471,1.421,1.421,0,0,0,1.534-1.25V11.9h8.846a8.163,8.163,0,0,1,0,16.327H48.5a1.464,1.464,0,0,0-1.471,1.25,1.415,1.415,0,0,0,1.25,1.534h10.38a11.01,11.01,0,0,0,11-11A10.836,10.836,0,0,0,58.766,9.06\" transform=\"translate(-10.227 -9.06)\" fill=\"#3f3938\"/>\n" +
                        //     "    </g>\n" +
                        //     "    <g id=\"Group_3438\" data-name=\"Group 3438\" transform=\"translate(12 9.06)\" clip-path=\"url(#pro-logo-clip-path)\">\n" +
                        //     "      <path id=\"Path_5497\" data-name=\"Path 5497\" d=\"M32.308,9.06a1.418,1.418,0,1,0,1.418,1.418A1.4,1.4,0,0,0,32.308,9.06\" transform=\"translate(-11.044 -9.06)\" fill=\"#3f3938\"/>\n" +
                        //     "    </g>\n" +
                        //     "    <g id=\"Group_3439\" data-name=\"Group 3439\" transform=\"translate(12 9.06)\" clip-path=\"url(#pro-logo-clip-path)\">\n" +
                        //     "      <path id=\"Path_5498\" data-name=\"Path 5498\" d=\"M43.108,9.06a1.418,1.418,0,1,0,1.418,1.418A1.4,1.4,0,0,0,43.108,9.06\" transform=\"translate(-10.497 -9.06)\" fill=\"#3f3938\"/>\n" +
                        //     "    </g>\n" +
                        //     "    <g id=\"Group_3440\" data-name=\"Group 3440\" transform=\"translate(12 9.06)\" clip-path=\"url(#pro-logo-clip-path)\">\n" +
                        //     "      <path id=\"Path_5499\" data-name=\"Path 5499\" d=\"M83.79,17.975a3.125,3.125,0,0,1-.263,1.292,3.7,3.7,0,0,1-.714,1.061,3.5,3.5,0,0,1-1.061.714,3.263,3.263,0,0,1-2.553,0h0a3.25,3.25,0,0,1-1.04-.7,3.43,3.43,0,0,1-.7-1.04,3.2,3.2,0,0,1-.263-1.271,3.281,3.281,0,0,1,.263-1.3,3.334,3.334,0,0,1,.7-1.072A3.218,3.218,0,0,1,80.47,14.7a3.3,3.3,0,0,1,1.292.252,3.605,3.605,0,0,1,1.061.683,3.262,3.262,0,0,1,.714,1.051,3.538,3.538,0,0,1,.252,1.292m.473-3.9A5.685,5.685,0,0,0,82.529,12.9a5.453,5.453,0,0,0-4.223,0,5.207,5.207,0,0,0-1.691,1.177,5.456,5.456,0,0,0-1.124,1.765,5.718,5.718,0,0,0-.41,2.143v8.079a1.062,1.062,0,0,0,.315.777,1.066,1.066,0,0,0,1.544-.011,1.118,1.118,0,0,0,.284-.767l.021-3.866a1.574,1.574,0,0,0,.137.116,5.019,5.019,0,0,0,.883.6,5.308,5.308,0,0,0,1.009.4,4.5,4.5,0,0,0,1.145.147,5.271,5.271,0,0,0,2.112-.431,5.6,5.6,0,0,0,1.734-1.166,5.522,5.522,0,0,0,1.166-1.744A5.359,5.359,0,0,0,85.859,18a5.5,5.5,0,0,0-.431-2.143,5.433,5.433,0,0,0-1.166-1.776\" transform=\"translate(-8.807 -8.887)\" fill=\"#fff\"/>\n" +
                        //     "    </g>\n" +
                        //     "    <g id=\"Group_3441\" data-name=\"Group 3441\" transform=\"translate(12 9.06)\" clip-path=\"url(#pro-logo-clip-path)\">\n" +
                        //     "      <path id=\"Path_5500\" data-name=\"Path 5500\" d=\"M93.152,17.081a1.1,1.1,0,0,0-.294-.756h0a1.069,1.069,0,0,0-.788-.3h-.084a5.565,5.565,0,0,0-2.227.462,5.825,5.825,0,0,0-3.047,3.068,5.533,5.533,0,0,0-.452,2.238v4.129a1.031,1.031,0,0,0,.326.767,1.055,1.055,0,0,0,.756.294,1.023,1.023,0,0,0,1.03-1.061V21.788a3.562,3.562,0,0,1,.284-1.418,3.8,3.8,0,0,1,.788-1.166,3.924,3.924,0,0,1,1.156-.777,3.448,3.448,0,0,1,1.387-.284h.084a1.058,1.058,0,0,0,1.082-1.061\" transform=\"translate(-8.241 -8.708)\" fill=\"#fff\"/>\n" +
                        //     "    </g>\n" +
                        //     "    <g id=\"Group_3442\" data-name=\"Group 3442\" transform=\"translate(12 9.06)\" clip-path=\"url(#pro-logo-clip-path)\">\n" +
                        //     "      <path id=\"Path_5501\" data-name=\"Path 5501\" d=\"M101.252,21.577a3.259,3.259,0,0,1-.263,1.313,3.672,3.672,0,0,1-.725,1.093,3.349,3.349,0,0,1-1.082.735,3.418,3.418,0,0,1-3.772-.735,3.7,3.7,0,0,1-.735-1.093,3.267,3.267,0,0,1-.273-1.313,3.317,3.317,0,0,1,.273-1.324A3.434,3.434,0,0,1,96.5,18.426a3.483,3.483,0,0,1,2.679.011,3.24,3.24,0,0,1,1.082.735,3.434,3.434,0,0,1,.988,2.406m1.681-2.164a5.645,5.645,0,0,0-1.177-1.765A5.454,5.454,0,0,0,100,16.461a5.621,5.621,0,0,0-4.329,0,5.685,5.685,0,0,0-1.755,1.187,5.58,5.58,0,0,0-1.628,3.94,5.3,5.3,0,0,0,.441,2.154A5.57,5.57,0,0,0,93.918,25.5a5.685,5.685,0,0,0,1.755,1.187,5.338,5.338,0,0,0,2.154.441A5.4,5.4,0,0,0,100,26.683a5.685,5.685,0,0,0,1.755-1.187,5.6,5.6,0,0,0,1.177-1.755,5.437,5.437,0,0,0,.431-2.154,5.54,5.54,0,0,0-.431-2.175\" transform=\"translate(-7.936 -8.707)\" fill=\"#fff\"/>\n" +
                        //     "    </g>\n" +
                        //     "  </g>\n" +
                        //     "</svg>\n",
                        // type: 'regular',
                        // subMenu: [
                            // {
                            //     text: 'سامانه مشاورین املاک',
                            //     link: 'pro',
                            // },
                            // {
                            //     text: 'نحوه همکاری با کیلید',
                            //     link: '',
                            // }
                        // ]
                    // },
            //         // {
            //         //     title: '',
            //         //     svgLogo: "\n" +
            //         //         "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"101.259\" height=\"22\" viewBox=\"0 0 101.259 22\">\n" +
            //         //         "  <defs>\n" +
            //         //         "    <clipPath id=\"ads-logo-clip-path\">\n" +
            //         //         "      <rect id=\"Rectangle_1567\" data-name=\"Rectangle 1567\" width=\"101.259\" height=\"22\"/>\n" +
            //         //         "    </clipPath>\n" +
            //         //         "  </defs>\n" +
            //         //         "  <g id=\"ads\" transform=\"translate(-10.52 -8.56)\">\n" +
            //         //         "    <g id=\"Group_3421\" data-name=\"Group 3421\" transform=\"translate(10.52 8.56)\" clip-path=\"url(#ads-logo-clip-path)\">\n" +
            //         //         "      <path id=\"Path_5480\" data-name=\"Path 5480\" d=\"M109,11.8a3.247,3.247,0,0,0-3.288-3.194H65.469a13.19,13.19,0,0,1,3.457,18.312,13.672,13.672,0,0,1-3.635,3.572h40.459a3.237,3.237,0,0,0,3.236-3.236V11.8Z\" transform=\"translate(-7.747 -8.557)\" fill=\"#f6a713\"/>\n" +
            //         //         "    </g>\n" +
            //         //         "    <g id=\"Group_3422\" data-name=\"Group 3422\" transform=\"translate(10.52 8.56)\" clip-path=\"url(#ads-logo-clip-path)\">\n" +
            //         //         "      <path id=\"Path_5481\" data-name=\"Path 5481\" d=\"M41.618,14.28A1.4,1.4,0,0,0,40.2,15.7V28.852a1.363,1.363,0,0,0,1.418,1.366A1.4,1.4,0,0,0,43.037,28.8V15.7a1.406,1.406,0,0,0-1.418-1.418\" transform=\"translate(-9.018 -8.27)\" fill=\"#3f3937\"/>\n" +
            //         //         "    </g>\n" +
            //         //         "    <g id=\"Group_3423\" data-name=\"Group 3423\" transform=\"translate(10.52 8.56)\" clip-path=\"url(#ads-logo-clip-path)\">\n" +
            //         //         "      <path id=\"Path_5482\" data-name=\"Path 5482\" d=\"M30.828,14.28A1.44,1.44,0,0,0,29.41,15.7V28.8a1.418,1.418,0,1,0,2.837,0V15.7a1.419,1.419,0,0,0-1.418-1.418\" transform=\"translate(-9.564 -8.27)\" fill=\"#3f3937\"/>\n" +
            //         //         "    </g>\n" +
            //         //         "    <g id=\"Group_3424\" data-name=\"Group 3424\" transform=\"translate(10.52 8.56)\" clip-path=\"url(#ads-logo-clip-path)\">\n" +
            //         //         "      <path id=\"Path_5483\" data-name=\"Path 5483\" d=\"M22.938,11.4h3.173a1.418,1.418,0,1,0,0-2.837H22.938a11.014,11.014,0,0,0-9.582,5.61V9.978a1.418,1.418,0,0,0-2.837,0V29.142a1.418,1.418,0,0,0,2.837,0V24.96a10.954,10.954,0,0,0,9.582,5.6h3.173a1.418,1.418,0,1,0,0-2.837H22.938a8.163,8.163,0,1,1,0-16.327\" transform=\"translate(-10.52 -8.56)\" fill=\"#3f3937\"/>\n" +
            //         //         "    </g>\n" +
            //         //         "    <g id=\"Group_3425\" data-name=\"Group 3425\" transform=\"translate(10.52 8.56)\" clip-path=\"url(#ads-logo-clip-path)\">\n" +
            //         //         "      <path id=\"Path_5484\" data-name=\"Path 5484\" d=\"M36.218,8.56A1.4,1.4,0,0,0,34.8,9.978V29.142a1.418,1.418,0,1,0,2.837,0V9.978A1.406,1.406,0,0,0,36.218,8.56\" transform=\"translate(-9.291 -8.56)\" fill=\"#3f3937\"/>\n" +
            //         //         "    </g>\n" +
            //         //         "    <g id=\"Group_3426\" data-name=\"Group 3426\" transform=\"translate(10.52 8.56)\" clip-path=\"url(#ads-logo-clip-path)\">\n" +
            //         //         "      <path id=\"Path_5485\" data-name=\"Path 5485\" d=\"M57.286,8.56H47.021A1.4,1.4,0,0,0,45.6,9.978v12.7a1.464,1.464,0,0,0,1.25,1.471,1.421,1.421,0,0,0,1.534-1.25V11.4h8.846a8.163,8.163,0,0,1,0,16.327H47.021a1.464,1.464,0,0,0-1.471,1.25,1.415,1.415,0,0,0,1.25,1.534h10.38a11.01,11.01,0,0,0,11-11A10.849,10.849,0,0,0,57.286,8.56\" transform=\"translate(-8.747 -8.56)\" fill=\"#3f3937\"/>\n" +
            //         //         "    </g>\n" +
            //         //         "    <g id=\"Group_3427\" data-name=\"Group 3427\" transform=\"translate(10.52 8.56)\" clip-path=\"url(#ads-logo-clip-path)\">\n" +
            //         //         "      <path id=\"Path_5486\" data-name=\"Path 5486\" d=\"M30.828,8.56a1.418,1.418,0,1,0,1.418,1.418A1.419,1.419,0,0,0,30.828,8.56\" transform=\"translate(-9.564 -8.56)\" fill=\"#3f3937\"/>\n" +
            //         //         "    </g>\n" +
            //         //         "    <g id=\"Group_3428\" data-name=\"Group 3428\" transform=\"translate(10.52 8.56)\" clip-path=\"url(#ads-logo-clip-path)\">\n" +
            //         //         "      <path id=\"Path_5487\" data-name=\"Path 5487\" d=\"M41.618,8.56a1.418,1.418,0,1,0,1.418,1.418A1.4,1.4,0,0,0,41.618,8.56\" transform=\"translate(-9.018 -8.56)\" fill=\"#3f3937\"/>\n" +
            //         //         "    </g>\n" +
            //         //         "    <g id=\"Group_3429\" data-name=\"Group 3429\" transform=\"translate(10.52 8.56)\" clip-path=\"url(#ads-logo-clip-path)\">\n" +
            //         //         "      <path id=\"Path_5488\" data-name=\"Path 5488\" d=\"M81.016,21.781H76.1l2.469-6.367ZM79.556,12l-.011-.011a1.312,1.312,0,0,0-.336-.4,1.006,1.006,0,0,0-.819-.2.7.7,0,0,0-.315.095,1.086,1.086,0,0,0-.525.536L72.664,24.639a1.471,1.471,0,0,0-.074.389,1.094,1.094,0,0,0,.294.746,1.076,1.076,0,0,0,1.376.147.98.98,0,0,0,.41-.5l.557-1.45h6.619l.578,1.471a1.152,1.152,0,0,0,.41.483,1.075,1.075,0,0,0,.588.179,1.016,1.016,0,0,0,.788-.336,1.04,1.04,0,0,0,.21-1.135Z\" transform=\"translate(-7.378 -8.417)\" fill=\"#fff\"/>\n" +
            //         //         "    </g>\n" +
            //         //         "    <g id=\"Group_3430\" data-name=\"Group 3430\" transform=\"translate(10.52 8.56)\" clip-path=\"url(#ads-logo-clip-path)\">\n" +
            //         //         "      <path id=\"Path_5489\" data-name=\"Path 5489\" d=\"M93.371,20.657a3.259,3.259,0,0,1-.263,1.313,3.672,3.672,0,0,1-.725,1.093A3.35,3.35,0,0,1,91.3,23.8a3.483,3.483,0,0,1-2.679,0,3.524,3.524,0,0,1-1.082-.735A3.7,3.7,0,0,1,86.8,21.97a3.267,3.267,0,0,1-.273-1.313,3.317,3.317,0,0,1,.273-1.324,3.434,3.434,0,0,1,1.828-1.828,3.33,3.33,0,0,1,1.334-.273,3.432,3.432,0,0,1,1.355.273,3.349,3.349,0,0,1,1.082.735,3.423,3.423,0,0,1,.725,1.093,3.9,3.9,0,0,1,.242,1.324M94.4,11.38a1,1,0,0,0-.735.326,1.1,1.1,0,0,0-.294.756v4.171a4.927,4.927,0,0,0-.872-.819,4.3,4.3,0,0,0-2.542-.7,5.338,5.338,0,0,0-2.154.441,5.657,5.657,0,0,0-1.755,1.177,5.546,5.546,0,0,0-1.187,6.094,5.57,5.57,0,0,0,1.187,1.755A5.685,5.685,0,0,0,87.8,25.763a5.3,5.3,0,0,0,2.154.441,5.437,5.437,0,0,0,2.154-.431,5.884,5.884,0,0,0,1.755-1.166,5.715,5.715,0,0,0,1.187-1.734,5.387,5.387,0,0,0,.452-2.133V12.483a1.071,1.071,0,0,0-.3-.767,1.058,1.058,0,0,0-.8-.336\" transform=\"translate(-6.779 -8.417)\" fill=\"#fff\"/>\n" +
            //         //         "    </g>\n" +
            //         //         "    <g id=\"Group_3431\" data-name=\"Group 3431\" transform=\"translate(10.52 8.56)\" clip-path=\"url(#ads-logo-clip-path)\">\n" +
            //         //         "      <path id=\"Path_5490\" data-name=\"Path 5490\" d=\"M104.407,21.265a3.269,3.269,0,0,0-.693-1.051,3.286,3.286,0,0,0-2.353-.977H99.143a1.153,1.153,0,0,1-.42-.084,1.028,1.028,0,0,1-.347-.242,1.055,1.055,0,0,1-.231-.347,1.153,1.153,0,0,1-.084-.42,1.046,1.046,0,0,1,.084-.4,1.161,1.161,0,0,1,.231-.357,1.1,1.1,0,0,1,.357-.252.912.912,0,0,1,.42-.084h3.887a1.014,1.014,0,0,0,.746-.294,1.037,1.037,0,0,0,.315-.788.983.983,0,0,0-.326-.767,1.071,1.071,0,0,0-.735-.263H99.164a3.128,3.128,0,0,0-1.25.252,3.373,3.373,0,0,0-1.019.672,3.3,3.3,0,0,0-.683,1,3.028,3.028,0,0,0-.252,1.229,3.312,3.312,0,0,0,.242,1.25,3.235,3.235,0,0,0,.672,1.03,3.159,3.159,0,0,0,1.019.7,3.028,3.028,0,0,0,1.271.263h2.08a2.121,2.121,0,0,1,.515.095,1.123,1.123,0,0,1,.41.231.929.929,0,0,1,.273.357,1.237,1.237,0,0,1,0,1,1.406,1.406,0,0,1-.294.4,1.318,1.318,0,0,1-.42.252,1.233,1.233,0,0,1-.462.084h-4.5a.989.989,0,0,0-1.009,1.04,1.1,1.1,0,0,0,.273.756.954.954,0,0,0,.735.315h4.623a3.18,3.18,0,0,0,1.3-.273,3.256,3.256,0,0,0,1.04-.725,3.605,3.605,0,0,0,.683-1.061,3.281,3.281,0,0,0,.252-1.282,3.971,3.971,0,0,0-.263-1.261\" transform=\"translate(-6.205 -8.237)\" fill=\"#fff\"/>\n" +
            //         //         "    </g>\n" +
            //         //         "  </g>\n" +
            //         //         "</svg>\n",
            //         //     type: 'light',
            //         //     subMenu: [
            //         //         {
            //         //             text: 'سامانه تبلیغات',
            //         //             link: '',
            //         //         },
            //         //         {
            //         //             text: 'چگونه در کیلید تبلیغ کنیم؟',
            //         //             link: '',
            //         //         }
            //         //     ]
            //         // },
            //         // {
            //         //     title: '',
            //         //     svgLogo: "\n" +
            //         //         "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"123.7\" height=\"22\" viewBox=\"0 0 123.7 22\">\n" +
            //         //         "  <defs>\n" +
            //         //         "    <clipPath id=\"insight-logo-clip-path\">\n" +
            //         //         "      <rect id=\"Rectangle_1551\" data-name=\"Rectangle 1551\" width=\"123.7\" height=\"22\"/>\n" +
            //         //         "    </clipPath>\n" +
            //         //         "  </defs>\n" +
            //         //         "  <g id=\"insight\" transform=\"translate(-9.82 -12)\">\n" +
            //         //         "    <g id=\"Group_3405\" data-name=\"Group 3405\" transform=\"translate(9.82 12)\" clip-path=\"url(#insight-logo-clip-path)\">\n" +
            //         //         "      <path id=\"Path_5464\" data-name=\"Path 5464\" d=\"M130.757,15.223a3.23,3.23,0,0,0-3.288-3.173H64.778a13.19,13.19,0,0,1,3.457,18.312,13.632,13.632,0,0,1-3.625,3.572h62.911a3.237,3.237,0,0,0,3.236-3.236V15.223Z\" transform=\"translate(-7.046 -11.997)\" fill=\"#008166\"/>\n" +
            //         //         "    </g>\n" +
            //         //         "    <g id=\"Group_3406\" data-name=\"Group 3406\" transform=\"translate(9.82 12)\" clip-path=\"url(#insight-logo-clip-path)\">\n" +
            //         //         "      <path id=\"Path_5465\" data-name=\"Path 5465\" d=\"M40.928,17.72a1.4,1.4,0,0,0-1.418,1.418V32.292a1.363,1.363,0,0,0,1.418,1.366,1.4,1.4,0,0,0,1.418-1.418v-13.1a1.4,1.4,0,0,0-1.418-1.418\" transform=\"translate(-8.317 -11.71)\" fill=\"#3f3938\"/>\n" +
            //         //         "    </g>\n" +
            //         //         "    <g id=\"Group_3407\" data-name=\"Group 3407\" transform=\"translate(9.82 12)\" clip-path=\"url(#insight-logo-clip-path)\">\n" +
            //         //         "      <path id=\"Path_5466\" data-name=\"Path 5466\" d=\"M30.138,17.72a1.44,1.44,0,0,0-1.418,1.418v13.1a1.418,1.418,0,0,0,2.837,0v-13.1a1.412,1.412,0,0,0-1.418-1.418\" transform=\"translate(-8.863 -11.71)\" fill=\"#3f3938\"/>\n" +
            //         //         "    </g>\n" +
            //         //         "    <g id=\"Group_3408\" data-name=\"Group 3408\" transform=\"translate(9.82 12)\" clip-path=\"url(#insight-logo-clip-path)\">\n" +
            //         //         "      <path id=\"Path_5467\" data-name=\"Path 5467\" d=\"M22.248,14.837h3.173a1.418,1.418,0,1,0,0-2.837H22.248a11,11,0,0,0-9.582,5.621v-4.2a1.418,1.418,0,1,0-2.837,0V32.582a1.418,1.418,0,1,0,2.837,0V28.4A10.954,10.954,0,0,0,22.248,34h3.173a1.418,1.418,0,1,0,0-2.837H22.248a8.163,8.163,0,1,1,0-16.327\" transform=\"translate(-9.819 -12)\" fill=\"#3f3938\"/>\n" +
            //         //         "    </g>\n" +
            //         //         "    <g id=\"Group_3409\" data-name=\"Group 3409\" transform=\"translate(9.82 12)\" clip-path=\"url(#insight-logo-clip-path)\">\n" +
            //         //         "      <path id=\"Path_5468\" data-name=\"Path 5468\" d=\"M35.528,12a1.4,1.4,0,0,0-1.418,1.418V32.582a1.418,1.418,0,1,0,2.837,0V13.418A1.4,1.4,0,0,0,35.528,12\" transform=\"translate(-8.59 -12)\" fill=\"#3f3938\"/>\n" +
            //         //         "    </g>\n" +
            //         //         "    <g id=\"Group_3410\" data-name=\"Group 3410\" transform=\"translate(9.82 12)\" clip-path=\"url(#insight-logo-clip-path)\">\n" +
            //         //         "      <path id=\"Path_5469\" data-name=\"Path 5469\" d=\"M56.6,12H46.331a1.4,1.4,0,0,0-1.418,1.418v12.7a1.464,1.464,0,0,0,1.25,1.471,1.421,1.421,0,0,0,1.534-1.25v-11.5h8.846a8.163,8.163,0,1,1,0,16.327H46.331a1.464,1.464,0,0,0-1.471,1.25,1.415,1.415,0,0,0,1.25,1.534h10.38a11.01,11.01,0,0,0,11-11A10.849,10.849,0,0,0,56.6,12\" transform=\"translate(-8.046 -12)\" fill=\"#3f3938\"/>\n" +
            //         //         "    </g>\n" +
            //         //         "    <g id=\"Group_3411\" data-name=\"Group 3411\" transform=\"translate(9.82 12)\" clip-path=\"url(#insight-logo-clip-path)\">\n" +
            //         //         "      <path id=\"Path_5470\" data-name=\"Path 5470\" d=\"M30.138,12a1.418,1.418,0,1,0,1.418,1.418A1.4,1.4,0,0,0,30.138,12\" transform=\"translate(-8.863 -12)\" fill=\"#3f3938\"/>\n" +
            //         //         "    </g>\n" +
            //         //         "    <g id=\"Group_3412\" data-name=\"Group 3412\" transform=\"translate(9.82 12)\" clip-path=\"url(#insight-logo-clip-path)\">\n" +
            //         //         "      <path id=\"Path_5471\" data-name=\"Path 5471\" d=\"M40.928,12a1.418,1.418,0,1,0,1.418,1.418A1.4,1.4,0,0,0,40.928,12\" transform=\"translate(-8.317 -12)\" fill=\"#3f3938\"/>\n" +
            //         //         "    </g>\n" +
            //         //         "    <g id=\"Group_3413\" data-name=\"Group 3413\" transform=\"translate(9.82 12)\" clip-path=\"url(#insight-logo-clip-path)\">\n" +
            //         //         "      <path id=\"Path_5472\" data-name=\"Path 5472\" d=\"M73.174,15.013a.9.9,0,0,0-.284.683V26.664a.943.943,0,0,0,1.607.672.9.9,0,0,0,.284-.672V15.7a.9.9,0,0,0-.284-.683.972.972,0,0,0-1.324,0\" transform=\"translate(-6.627 -11.861)\" fill=\"#fff\"/>\n" +
            //         //         "    </g>\n" +
            //         //         "    <g id=\"Group_3414\" data-name=\"Group 3414\" transform=\"translate(9.82 12)\" clip-path=\"url(#insight-logo-clip-path)\">\n" +
            //         //         "      <path id=\"Path_5473\" data-name=\"Path 5473\" d=\"M83.695,19.205h0a4.433,4.433,0,0,0-1.429-1,4.613,4.613,0,0,0-3.6.011,4.348,4.348,0,0,0-1.439,1.009,4.665,4.665,0,0,0-.956,1.481,4.783,4.783,0,0,0-.347,1.818v3.992a.87.87,0,0,0,.3.683.961.961,0,0,0,1.324-.021.945.945,0,0,0,.263-.672V22.525a2.979,2.979,0,0,1,.2-1.1,2.806,2.806,0,0,1,.557-.883,2.638,2.638,0,0,1,.84-.588,2.7,2.7,0,0,1,2.1,0,2.511,2.511,0,0,1,.83.6,2.761,2.761,0,0,1,.546.893,3.164,3.164,0,0,1,.2,1.1V26.5a.9.9,0,0,0,.284.683.975.975,0,0,0,.662.263.963.963,0,0,0,.672-.263.911.911,0,0,0,.273-.672v-4a4.987,4.987,0,0,0-.336-1.818,4.824,4.824,0,0,0-.946-1.481\" transform=\"translate(-6.474 -11.704)\" fill=\"#fff\"/>\n" +
            //         //         "    </g>\n" +
            //         //         "    <g id=\"Group_3415\" data-name=\"Group 3415\" transform=\"translate(9.82 12)\" clip-path=\"url(#insight-logo-clip-path)\">\n" +
            //         //         "      <path id=\"Path_5474\" data-name=\"Path 5474\" d=\"M92.537,22.473a2.834,2.834,0,0,0-.925-.63,2.79,2.79,0,0,0-1.145-.231H88.523a.838.838,0,0,1-.357-.074,1.049,1.049,0,0,1-.3-.21,1.119,1.119,0,0,1-.2-.294.838.838,0,0,1-.074-.357.747.747,0,0,1,.074-.336,1.021,1.021,0,0,1,.2-.3.925.925,0,0,1,.3-.21.777.777,0,0,1,.357-.074h3.394a.9.9,0,0,0,.662-.263.918.918,0,0,0,.284-.7.9.9,0,0,0-.294-.693.961.961,0,0,0-.651-.242H88.544a2.8,2.8,0,0,0-1.1.221,2.9,2.9,0,0,0-.893.6,2.766,2.766,0,0,0-.819,1.965,2.918,2.918,0,0,0,.809,2.007,2.785,2.785,0,0,0,2.017.851h1.818a1.563,1.563,0,0,1,.441.084,1.082,1.082,0,0,1,.357.2.839.839,0,0,1,.231.3.982.982,0,0,1,.084.41.9.9,0,0,1-.095.431,1.054,1.054,0,0,1-.252.347,1.133,1.133,0,0,1-.357.221,1.112,1.112,0,0,1-.4.074H86.454a.913.913,0,0,0-.651.263,1.009,1.009,0,0,0,0,1.334.852.852,0,0,0,.651.284h4.034a2.761,2.761,0,0,0,1.145-.242,2.934,2.934,0,0,0,.914-.641,2.972,2.972,0,0,0,.6-.935,2.974,2.974,0,0,0,0-2.248,2.859,2.859,0,0,0-.609-.9\" transform=\"translate(-5.986 -11.704)\" fill=\"#fff\"/>\n" +
            //         //         "    </g>\n" +
            //         //         "    <g id=\"Group_3416\" data-name=\"Group 3416\" transform=\"translate(9.82 12)\" clip-path=\"url(#insight-logo-clip-path)\">\n" +
            //         //         "      <path id=\"Path_5475\" data-name=\"Path 5475\" d=\"M94.967,17.84a.977.977,0,0,0-.693.273h0a.92.92,0,0,0-.284.683v7.743a.9.9,0,0,0,.284.672.951.951,0,0,0,1.334,0,.928.928,0,0,0,.273-.672V18.8a.919.919,0,0,0-.263-.672.932.932,0,0,0-.651-.284\" transform=\"translate(-5.559 -11.704)\" fill=\"#fff\"/>\n" +
            //         //         "    </g>\n" +
            //         //         "    <g id=\"Group_3417\" data-name=\"Group 3417\" transform=\"translate(9.82 12)\" clip-path=\"url(#insight-logo-clip-path)\">\n" +
            //         //         "      <path id=\"Path_5476\" data-name=\"Path 5476\" d=\"M94.2,15.535a1.032,1.032,0,0,0-.315.756,1.064,1.064,0,0,0,.3.756,1.022,1.022,0,0,0,.767.315,1.055,1.055,0,0,0,.767-.315,1.078,1.078,0,0,0,0-1.523,1.108,1.108,0,0,0-1.523.011\" transform=\"translate(-5.565 -11.837)\" fill=\"#fff\"/>\n" +
            //         //         "    </g>\n" +
            //         //         "    <g id=\"Group_3418\" data-name=\"Group 3418\" transform=\"translate(9.82 12)\" clip-path=\"url(#insight-logo-clip-path)\">\n" +
            //         //         "      <path id=\"Path_5477\" data-name=\"Path 5477\" d=\"M114.891,19.374A4.185,4.185,0,0,0,111.739,18a3.82,3.82,0,0,0-1.04.137,4.353,4.353,0,0,0-.935.378,4.558,4.558,0,0,0-.809.588l-.074.074-.011-3.478a.96.96,0,0,0-.263-.683.939.939,0,0,0-1.345,0,.937.937,0,0,0-.284.683V26.644a.928.928,0,0,0,.273.672.978.978,0,0,0,1.345,0,.928.928,0,0,0,.273-.672v-4a2.5,2.5,0,0,1,.231-1.082,2.943,2.943,0,0,1,.63-.883,3.174,3.174,0,0,1,.914-.588,2.75,2.75,0,0,1,2.122,0,2.417,2.417,0,0,1,.777.588,2.615,2.615,0,0,1,.5.883,3.468,3.468,0,0,1,.179,1.1v4a.92.92,0,0,0,.284.683.956.956,0,0,0,.662.263.916.916,0,0,0,.946-.935v-4a5.1,5.1,0,0,0-.315-1.807,4.675,4.675,0,0,0-.914-1.492\" transform=\"translate(-4.902 -11.862)\" fill=\"#fff\"/>\n" +
            //         //         "    </g>\n" +
            //         //         "    <g id=\"Group_3419\" data-name=\"Group 3419\" transform=\"translate(9.82 12)\" clip-path=\"url(#insight-logo-clip-path)\">\n" +
            //         //         "      <path id=\"Path_5478\" data-name=\"Path 5478\" d=\"M125.042,25.091a.882.882,0,0,0-1.04-.168,1.423,1.423,0,0,0-.273.189,2.661,2.661,0,0,1-.893.536,3.312,3.312,0,0,1-2.206-.053,3,3,0,0,1-.935-.609,2.958,2.958,0,0,1-.63-.914,2.88,2.88,0,0,1-.231-1.135v-3h3.761a.97.97,0,0,0,.683-.273.868.868,0,0,0,.284-.651.968.968,0,0,0-.967-.967h-3.761V16.256a.876.876,0,0,0-.294-.683.967.967,0,0,0-1.345.011.913.913,0,0,0-.284.672v6.671a4.547,4.547,0,0,0,.389,1.891,4.706,4.706,0,0,0,1.051,1.513A4.841,4.841,0,0,0,119.9,27.34a4.979,4.979,0,0,0,1.9.357,4.912,4.912,0,0,0,1.723-.3,4.566,4.566,0,0,0,1.439-.9,1.223,1.223,0,0,0,.252-.357.956.956,0,0,0,.084-.41.841.841,0,0,0-.263-.63\" transform=\"translate(-4.399 -11.833)\" fill=\"#fff\"/>\n" +
            //         //         "    </g>\n" +
            //         //         "    <g id=\"Group_3420\" data-name=\"Group 3420\" transform=\"translate(9.82 12)\" clip-path=\"url(#insight-logo-clip-path)\">\n" +
            //         //         "      <path id=\"Path_5479\" data-name=\"Path 5479\" d=\"M101.515,19.742a2.854,2.854,0,0,1,1.166.231,3.1,3.1,0,0,1,.946.63,2.924,2.924,0,0,1,.63.946,2.839,2.839,0,0,1,.231,1.156,2.776,2.776,0,0,1-.231,1.135,3.042,3.042,0,0,1-.63.946,2.952,2.952,0,0,1-.946.641,2.994,2.994,0,0,1-3.908-1.586,2.776,2.776,0,0,1-.231-1.135,2.825,2.825,0,0,1,.231-1.145,3.1,3.1,0,0,1,.63-.946,3.268,3.268,0,0,1,.946-.641,2.889,2.889,0,0,1,1.166-.231M106,20.8a4.861,4.861,0,0,0-2.585-2.585,4.943,4.943,0,0,0-3.793,0,4.88,4.88,0,0,0-1.544,1.04A5.09,5.09,0,0,0,97.029,20.8a4.808,4.808,0,0,0-.389,1.9,4.582,4.582,0,0,0,.389,1.891,5.013,5.013,0,0,0,1.04,1.534A5.142,5.142,0,0,0,99.6,27.17a4.846,4.846,0,0,0,1.9.389,4.851,4.851,0,0,0,2.921-.967l.011-.011v.62a2.625,2.625,0,0,1-.231,1.124,2.9,2.9,0,0,1-.63.914,3.048,3.048,0,0,1-.946.609,3.278,3.278,0,0,1-2.217.053,2.668,2.668,0,0,1-.9-.546,1.349,1.349,0,0,0-.273-.179.89.89,0,0,0-1.04.168.925.925,0,0,0-.263.641,1.142,1.142,0,0,0,.084.41.924.924,0,0,0,.252.347,4.165,4.165,0,0,0,1.45.9,4.971,4.971,0,0,0,1.734.3,5.078,5.078,0,0,0,1.912-.368,4.623,4.623,0,0,0,1.555-1.009,4.772,4.772,0,0,0,1.051-1.513,4.719,4.719,0,0,0,.389-1.891V22.946c0-.042-.011-.074-.011-.105s.011-.095.011-.137A4.447,4.447,0,0,0,106,20.8\" transform=\"translate(-5.425 -11.704)\" fill=\"#fff\"/>\n" +
            //         //         "    </g>\n" +
            //         //         "  </g>\n" +
            //         //         "</svg>\n",
            //         //     type: 'light',
            //         //     subMenu: [
            //         //         {
            //         //             text: 'سامانه تحلیل بازار مسکن',
            //         //             link: '',
            //         //         }
            //         //     ]
                    // },
                // ]
            // },
        ],
        mainActionButton: {
            text: 'ثبت رایگان آگهی',
            link: 'post-real-estate-listings/buy/step1',
        }
    },
    mobile: {
        menuList: [
            {
                title: 'خرید',
                url: 'buy',
                field: 'buy',
                blogContentState: true,
                subMenu: [
                    {
                        title: '',
                        collapsed: true,
                        type: 'regular',
                        subMenu: [
                            // { //"find me a home" -> (landing)
                            //     text: 'خانه خود را بیابید',
                            //     link: '',
                            // },
                            // {
                            //     text: 'تخمین قیمت خانه',
                            //     link: 'smart-real-estate-valuations',
                            // },
                            // {
                            //     text: 'محاسبه حق کمیسیون',
                            //     link: 'commission-calculator',
                            // },
                            {
                                text: 'جستجو روی نقشه',
                                link: 'map',
                                params: {
                                    type: 'listing',
                                    locations: 'c_2301021576',
                                    sort: 'date,DESC',
                                    subType: 'buy',
                                    smartSearch: true
                                }
                            },
                            {
                                text: 'نقشه حرارتی قیمت',
                                link: '',
                            },
                        ]
                    },
                    {
                        title: 'خرید انواع ملک',
                        type: 'light',
                        subMenu: [
                            {
                                text: 'خرید آپارتمان مسکونی',
                                link: 'buy-apartment/tehran',
                                params: {
                                    locations: 'c_2301021576',
                                    subType: 'buy',
                                    type: 'listing',
                                    sort: 'date,DESC',
                                    apartment: true,
                                    utilityType: 'residential',
                                }
                            },
                            {
                                text: 'خرید واحد اداری',
                                link: 'buy-office/tehran',
                                params: {
                                    locations: 'c_2301021576',
                                    subType: 'buy',
                                    type: 'listing',
                                    sort: 'date,DESC',
                                    utilityType: 'office',
                                }
                            },
                            {
                                text: 'خرید واحد تجاری',
                                link: 'buy-commercial/tehran',
                                params: {
                                    locations: 'c_2301021576',
                                    subType: 'buy',
                                    type: 'listing',
                                    sort: 'date,DESC',
                                    utilityType: 'commercial',
                                }
                            },
                            {
                                text: 'خرید زمین کلنگی',
                                link: 'buy-land/tehran',
                                params: {
                                    locations: 'c_2301021576',
                                    subType: 'buy',
                                    type: 'listing',
                                    sort: 'date,DESC',
                                    utilityType: 'residential',
                                    land: true,
                                }
                            }
                        ]
                    },
                    {
                        title: 'خرید ملک در محلات منتخب',
                        type: 'light',
                        subMenu: [
                            {
                                text: 'خرید آپارتمان در تهران پارس',
                                link: 'buy-apartment/tehran-tehranpars',
                            },
                            {
                                text: 'خرید آپارتمان در پونک',
                                link: 'buy-apartment/tehran-punak',
                            },
                            {
                                text: 'خرید آپارتمان در شهرک غرب',
                                link: 'buy-apartment/tehran-shahrak_qarb',
                            },
                            {
                                text: 'خرید آپارتمان در مرزداران',
                                link: 'buy-apartment/tehran-marzdaran',
                            },
                            {
                                text: 'خرید آپارتمان در سعادت آباد',
                                link: 'buy-apartment/tehran-saadat_abad',
                            },
                        ]
                    },
                ]
            },
            {
                title: 'رهن و اجاره',
                url: 'rent',
                field: 'rent',
                blogContentState: true,
                subMenu: [
                    {
                        title: '',
                        collapsed: true,
                        type: 'regular',
                        subMenu: [
                            // {
                            //     text: 'محاسبه کمیسیون',
                            //     link: 'commission-calculator',
                            // },
                            // {
                            //     text: 'تبدیل رهن و اجاره',
                            //     link: '',
                            // },
                            {
                                text: 'جستجو روی نقشه',
                                link: 'map',
                                params: {
                                    type: 'listing',
                                    locations: 'c_2301021576',
                                    sort: 'date,DESC',
                                    subType: 'rent',
                                    smartSearch: true
                                }
                            },
                            {
                                text: 'نقشه حرارتی قیمت',
                                link: '',
                            }
                        ]
                    },
                    {
                        title: 'رهن و اجاره انواع ملک',
                        type: 'light',
                        subMenu: [
                            {
                                text: 'رهن و اجاره آپارتمان مسکونی',
                                link: 'rent-apartment/tehran',
                                params: {
                                    locations: 'c_2301021576',
                                    subType: 'rent',
                                    type: 'listing',
                                    sort: 'date,DESC',
                                    utilityType: 'residential',
                                }
                            },
                            {
                                text: 'رهن کامل آپارتمان مسکونی',
                                link: 'rent-apartment/tehran',
                                params: {
                                    locations: 'c_2301021576',
                                    subType: 'rent',
                                    type: 'listing',
                                    sort: 'date,DESC',
                                    depositOnly: true,
                                    utilityType: 'residential',
                                }
                            },
                            {
                                text: 'اجاره واحد اداری',
                                link: 'rent/tehran',
                                params: {
                                    locations: 'c_2301021576',
                                    subType: 'rent',
                                    type: 'listing',
                                    sort: 'date,DESC',
                                    utilityType: 'office',
                                }
                            },
                            {
                                text: 'اجاره واحد تجاری',
                                link: 'rent/tehran',
                                params: {
                                    locations: 'c_2301021576',
                                    subType: 'rent',
                                    type: 'listing',
                                    sort: 'date,DESC',
                                    utilityType: 'commercial',
                                }
                            }
                        ]
                    },
                    {
                        title: 'رهن و اجاره ملک در محلات منتخب',
                        type: 'light',
                        subMenu: [
                            {
                                text: 'اجاره خانه و آپارتمان در تهران پارس',
                                link: 'rent-apartment/tehran-tehranpars',
                            },
                            {
                                text: 'اجاره خانه و آپارتمان در پونک',
                                link: 'rent-apartment/tehran-punak',
                            },
                            {
                                text: 'اجاره خانه و آپارتمان در شهرک غرب',
                                link: 'rent-apartment/tehran-shahrak_qarb',
                            },
                            {
                                text: 'اجاره خانه و  آپارتمان در مرزداران',
                                link: 'rent-apartment/tehran-marzdaran',
                            },
                            {
                                text: 'اجاره خانه و آپارتمان در سعادت آباد',
                                link: 'rent-apartment/tehran-saadat_abad',
                            }
                        ]
                    },
                ]
            },
            {
                title: 'قیمت خانه شما',
                url: 'smart-real-estate-valuations',
                field: 'avm',
                blogContentState: true,
                subMenu: [
                    {
                        title: '',
                        collapsed: true,
                        type: 'regular',
                        subMenu: [
                            {
                                text: 'قیمت خانه خود را تخمین بزنید',
                                link: 'smart-real-estate-valuations',
                            },
                            {
                                text: 'اطلاعات بازار مسکن و فرصت‌های سرمایه گذاری',
                                link: 'housing-market-insight',
                            }
                        ]
                    },
                    {
                        title: 'اطلاعات بازار مسکن شهرها',
                        type: 'light',
                        subMenu: [
                            {
                                text: 'اطلاعات بازار مسکن در شهر تهران',
                                link: 'housing-market-insight/city',
                                params: {
                                    cityId: '2301021576'
                                }

                            },
                            {
                                text: 'اطلاعات بازار مسکن در شهر کرج',
                                link: 'housing-market-insight/city',
                                params: {
                                    cityId: '3001011590'
                                }

                            }
                        ]
                    },
                    {
                        title: 'اطلاعات بازار مسکن مناطق',
                        type: 'light',
                        subMenu: [
                            {
                                text: 'اطلاعات بازار مسکن در منطقه 1',
                                link: 'housing-market-insight/region',
                                params: {
                                    cityId: '2301021576',
                                    regionId: '2301021601'
                                }
                            },
                            {
                                text: 'اطلاعات بازار مسکن در منطقه 4',
                                link: 'housing-market-insight/region',
                                params: {
                                    cityId: '2301021576',
                                    regionId: '2301021604'
                                }
                            },
                            {
                                text: 'اطلاعات بازار مسکن در منطقه 5',
                                link: 'housing-market-insight/region',
                                params: {
                                    cityId: '2301021576',
                                    regionId: '2301021605'
                                }
                            },
                            {
                                text: 'اطلاعات بازار مسکن در منطقه 12',
                                link: 'housing-market-insight/region',
                                params: {
                                    cityId: '2301021576',
                                    regionId: '2301021612'
                                }
                            },
                            {
                                text: 'اطلاعات بازار مسکن در منطقه 22',
                                link: 'housing-market-insight/region',
                                params: {
                                    cityId: '2301021576',
                                    regionId: '2301022226'
                                }
                            }
                        ]
                    }
                ]
            },
            {
                title: 'آژانس‌های املاک',
                url: 'real-estate-agencies',
                field: 'agency',
                blogContentState: true,
                subMenu: [
                    {
                        title: 'بدنبال مشاور املاک هستید',
                        collapsed: true,
                        type: 'light',
                        subMenu: [
                            {
                                text: 'لیست آژانس‌های همکار',
                                link: 'real-estate-agencies/tehran',
                                params: {
                                    locations: 'c_2301021576',
                                    type: 'agency',
                                    sort: 'kilid,DESC'
                                }
                            },
                            {
                                text: 'آژانس‌های املاک تهران پارس',
                                link: 'real-estate-agencies/tehran-tehranpars',
                                params: {
                                    locations: 'c_2301021576-l_37',
                                    type: 'agency',
                                    sort: 'kilid,DESC'
                                }
                            },
                            {
                                text: 'آژانس‌های املاک پونک',
                                link: 'real-estate-agencies/tehran-punak',
                                params: {
                                    locations: 'c_2301021576-l_45',
                                    type: 'agency',
                                    sort: 'kilid,DESC'
                                }
                            },
                            {
                                text: 'آژانس‌های املاک شهرک غرب',
                                link: 'real-estate-agencies/tehran-shahrak_qarb',
                                params: {
                                    locations: 'c_2301021576-l_14',
                                    type: 'agency',
                                    sort: 'kilid,DESC'
                                }
                            },
                            {
                                text: 'آژانس‌های املاک سعادت آباد',
                                link: 'real-estate-agencies/tehran-saadat_abad',
                                params: {
                                    locations: 'c_2301021576-l_11',
                                    type: 'agency',
                                    sort: 'kilid,DESC'
                                }
                            }
                        ]
                    },
                    {
                        title: 'مشاورین املاک هستید',
                        type: 'light',
                        subMenu: [
                            {
                                text: 'سامانه مشاورین املاک',
                                link: 'pro',
                            },
                            // {
                            //     text: 'نحوه همکاری با کیلید',
                            //     link: '',
                            // },
                            {
                                text: 'ورود به سامانه مشاورین املاک',
                                externalLink: 'https://pro.kilid.com',
                            }
                        ]
                    }
                ]
            },
            // {
                // title: 'راهکارهای کیلید',
                // url: 'kilidkon',
                // field: 'kilidkon',
            //     subMenu: [
            //         {
            //             title: 'KiliD PRO',
            //             type: 'regular',
            //             subMenu: [
            //                 {
            //                     text: 'سامانه مشاورین املاک',
            //                     link: '',
            //                 },
            //                 {
            //                     text: 'نحوه همکاری با کیلید',
            //                     link: '',
            //                 }
            //             ]
            //         },
            //         {
            //             title: 'KiliD Ads',
            //             type: 'light',
            //             subMenu: [
            //                 {
            //                     text: 'سامانه تبلیغات',
            //                     link: '',
            //                 },
            //                 {
            //                     text: 'چگونه در کیلید تبلیغ کنیم؟',
            //                     link: '',
            //                 }
            //             ]
            //         },
            //         {
            //             title: 'KiliD Insight',
            //             type: 'light',
            //             subMenu: [
            //                 {
            //                     text: 'سامانه تحلیل بازار مسکن',
            //                     link: '',
            //                 }
            //             ]
            //         },
            //     ]
            // }
        ],
        mainActionButton: {
            text: 'ثبت رایگان آگهی',
            link: 'post-real-estate-listings/buy/step1',
        }
    }
};

export const HeaderBlogContent = {
    desktop: {},
    mobile: {}
};

export const blogType = {
    title: "در کیلید مگ بخوانید",
    type: "light",
    url: "",
    subMenu: []
};

export class HeaderBlogContentClass {
    public static getBlogContentObject(mode: string, field?: string) {
        if (field) {
            return HeaderBlogContent[mode][field] || blogType
        }
        else {
            return HeaderBlogContent[mode] || blogType
        }
    }
}
