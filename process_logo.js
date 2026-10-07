const Jimp = require('jimp');

async function main() {
    console.log("Loading image...");
    const img = await Jimp.read('C:/Users/Marcio/.gemini/antigravity-ide/brain/6fa8c61e-1f8e-4d74-94a2-5c696bc4e50c/.user_uploaded/media_1791399862235.png');
    
    const width = img.bitmap.width;
    const height = img.bitmap.height;
    const data = img.bitmap.data;
    
    const isWhite = (idx) => {
        const r = data[idx];
        const g = data[idx+1];
        const b = data[idx+2];
        const a = data[idx+3];
        // Anti-aliasing might create near-white pixels. We'll consider r,g,b > 220 as white background
        // Wait, text is dark, so > 220 is safe. The red is ~200, 0, 0. 
        return (r > 230 && g > 230 && b > 230 && a > 0);
    };

    console.log("Finding red square bounding box...");
    let redMaxX = 0;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            const r = data[idx];
            const g = data[idx+1];
            const b = data[idx+2];
            // Red square heuristic
            if (r > 150 && g < 100 && b < 100) {
                if (x > redMaxX) redMaxX = x;
            }
        }
    }
    console.log("redMaxX:", redMaxX);

    console.log("Flood filling edges...");
    const visited = new Uint8Array(width * height);
    const queue = [];

    // Push edge pixels
    for (let x = 0; x < width; x++) {
        queue.push({x: x, y: 0});
        queue.push({x: x, y: height - 1});
    }
    for (let y = 0; y < height; y++) {
        queue.push({x: 0, y: y});
        queue.push({x: width - 1, y: y});
    }

    let head = 0;
    while (head < queue.length) {
        const p = queue[head++];
        const x = p.x;
        const y = p.y;
        
        if (x < 0 || x >= width || y < 0 || y >= height) continue;
        
        const i = y * width + x;
        if (visited[i]) continue;
        visited[i] = 1;
        
        const idx = i * 4;
        if (isWhite(idx)) {
            // Make transparent
            data[idx + 3] = 0;
            
            queue.push({x: x+1, y: y});
            queue.push({x: x-1, y: y});
            queue.push({x: x, y: y+1});
            queue.push({x: x, y: y-1});
        }
    }

    console.log("Clearing inside letters...");
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            // We clear white pixels that are to the right of the red square + some margin
            if (x > redMaxX + 5) {
                const idx = (y * width + x) * 4;
                if (isWhite(idx)) {
                    data[idx + 3] = 0;
                }
            }
        }
    }

    console.log("Autocropping...");
    img.autocrop();

    const outPath = 'C:/Users/Marcio/exellente odonto  new/public/images/brand/odonto-excellence-logo.png';
    console.log("Saving to:", outPath);
    await img.writeAsync(outPath);
    console.log("Done!");
}

main().catch(console.error);
