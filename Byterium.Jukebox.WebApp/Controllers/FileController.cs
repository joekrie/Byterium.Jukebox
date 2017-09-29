using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace Byterium.Jukebox.WebApp.Controllers
{
    public class FileController : Controller
    {
        [HttpGet("file")]
        public IActionResult Get()
        {
            Response.Headers.Add("X-Accel-Redirect", "file.ext");
            return new EmptyResult(); 
        }
    }
}
