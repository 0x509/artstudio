export default defineEventHandler((event) => {
    const query = getQuery(event)
    const url = 'http://10.60.2.182:7860/sdapi/v1/txt2img';
    const options = {
        method: 'POST',
        body: {
            "alwayson_scripts": {},
            "batch_size": 1,
            "cfg_scale": 7,
            "comments": {},
            "denoising_strength": 0.7,
            "disable_extra_networks": false,
            "do_not_save_grid": false,
            "do_not_save_samples": false,
            "enable_hr": false,
            "height": 512,
            "hr_negative_prompt": "extra legs, extra arms, children, kids, babies, teen",
            "hr_prompt": query.prompt,
            "hr_resize_x": 0,
            "hr_resize_y": 0,
            "hr_scale": 2,
            "hr_second_pass_steps": 0,
            "hr_upscaler": "Latent",
            "n_iter": 1,
            "negative_prompt": "extra legs, extra arms, children, kids, babies, teen",
            "override_settings": {"sd_model_checkpoint": "epicrealism_naturalSinRC1VAE.safetensors"},
            "override_settings_restore_afterwards": false,
            "prompt": query.prompt,
            "restore_faces": true,
            "s_churn": 0,
            "s_min_uncond": 0,
            "s_noise": 1,
            "s_tmax": null,
            "s_tmin": 0,
            "sampler_name": "DPM++ 2M Karras",
            "save_images": true,
            "script_args": [],
            "script_name": null,
            "seed": -1,
            "seed_enable_extras": true,
            "seed_resize_from_h": -1,
            "seed_resize_from_w": -1,
            "steps": 25,
            "styles": [],
            "subseed": -1,
            "subseed_strength": 0,
            "tiling": false,
            "width": 512
        }
    };

    if (query.faceswap == "true") {
        options.body.alwayson_scripts = {"ReActor": {"args": [null, true, "0", "0", "inswapper_128.onnx", "CodeFormer", 1, true, "None", 1, 1, false, true, 1, 0, 0, false, 0.5, true, false, "CUDA", false, 1, "LA-Mult.safetensors", "", null, false, false, 0.5, 0]}}
    }

    try {
        // @ts-ignore
        return $fetch(url, options);
    } catch (error) {
        console.error(error);
    }
})
