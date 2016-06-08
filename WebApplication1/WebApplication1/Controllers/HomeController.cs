using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Web.Services;
using WebApplication1.Models;
namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {

        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        [ValidateInput(false)]
        public ActionResult Index(string reportName)
        {
            aboutModel data = new aboutModel();
            data.html = reportName;
            //check for reportName parameter value now
            //to do : Return something
            return RedirectToAction("About", data);

        }
        [ValidateInput(false)]
        public ActionResult About(aboutModel data)
        {
            ViewBag.Message = "Your application description page.";

            return View(data);
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        //controller

      
    }
}