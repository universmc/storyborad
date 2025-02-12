var x = 0;
        var y = 0;
        var isDrawing = false;
        const cnv = document.getElementById("canvas");
        const ctx = cnv.getContext("2d");

        cnv.addEventListener("mousedown", (e) => {
            x = e.offsetX;
            y = e.offsetY;
            isDrawing = true;
        });

        cnv.addEventListener("mousemove", (e) => {
            if (isDrawing === true) {
                drawLine(x, y, e.offsetX, e.offsetY);
                x = e.offsetX;
                y = e.offsetY;
            }
        });

        cnv.addEventListener("mouseup", (e) => {
            if (isDrawing === true) {
                drawLine(x, y, e.offsetX, e.offsetY);
                x = 0;
                y = 0;
                isDrawing = false;
            }
        });

        function drawLine(x1, y1, x2, y2) {
            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.lineWidth = 1;
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            ctx.closePath();
        }