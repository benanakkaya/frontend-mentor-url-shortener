import React from 'react';
import * as yup from "yup";
import { useFormik } from 'formik';
import axios from 'axios';

export default function UrlShorter({shortenedUrls,setShortenedUrls}) {


    const formik = useFormik({
        initialValues: {
            longUrl: ""
        },
        onSubmit: async (values) => {
            console.log("kaka");
            const response = await axios.post(
                "https://api.tinyurl.com/create",
                {
                    url: values.longUrl,
                    domain: "tinyurl.com", // Kısaltılmış URL'lerinizin görüneceği alan adınızı buraya ekleyin
                },
                {
                    headers: {
                        Authorization: "Bearer bhSmsQIEBkwFnjuVwLxWNNvhBoFdSFiOqsCoSggkWu8sIJgLuH3CWxCW30jH",
                    },
                }
            );
            setShortenedUrls([...shortenedUrls,{pure:values.longUrl,shortened:response.data.data.tiny_url}])
            console.log(response.data);
        },
        validationSchema: yup.object().shape({
          longUrl: yup.string().url("Please enter a valid URL!").required("Please enter a URL!")
        })
    })






    return (
        <div className='container px-12'>
            <form onSubmit={formik.handleSubmit} className='h-52 md:h-40 rounded-xl bg-cover bg-darkVio bg-purpleMobile md:bg-purpleDesktop flex flex-col  items-start justify-center px-6 md:px-24 gap-3 '>
                <div className='flex flex-col md:flex-row items-center gap-8 w-full'>
                    <input name='longUrl' onChange={formik.handleChange} placeholder='Shorten a link here...' className={`outline-none w-full py-3 rounded-xl px-6 md:flex-1 ${formik.errors.longUrl && "border-4 border-red"}`} />
                    <button type='submit' className='w-full md:w-40 py-3 rounded-xl bg-cyan text-white'>
                        Shorten it!
                    </button>
                </div>
                {formik.errors.longUrl && <small className='text-red'>{formik.errors.longUrl}</small>}
            </form>

        </div>
    )
}
