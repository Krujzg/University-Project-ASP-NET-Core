using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using zh_wpf.Models;
using zh_wpf.Services;

namespace zh_wpf
{
    public partial class MainWindow : Window
    {
        RestService<Tevekenyseg, string> restclient;
        NotifyService notifyservice;
        string token;
        public MainWindow(string token)
        {
            InitializeComponent();
            restclient = new RestService<Tevekenyseg, string>
               ("https://localhost:44385", "/api/tevekenyseg", token);

            notifyservice = new NotifyService("https://localhost:44385/tevekenysegHub");

            notifyservice.AddHandler<Tevekenyseg>("Tevekenyseg", (tevekenyseg) =>
            {
                if (tevekenyseg.Kategoria == "opcionális")
                {
                    lbox_opcionalis.Items.Add(tevekenyseg);
                }
                else if (tevekenyseg.Kategoria == "sürgős")
                {
                    lbox_surgos.Items.Add(tevekenyseg);
                }
                else
                {
                    lbox_normal.Items.Add(tevekenyseg);
                }
                
            });

            notifyservice.Init();

            this.token = token;

            Sync();
        }

        private async Task Sync()
        {
            lbox_normal.Items.Clear();
            lbox_opcionalis.Items.Clear();
            lbox_surgos.Items.Clear();
            //sync
            var tevekenysegek = await restclient.Get();
            foreach (var item in tevekenysegek)
            {
                if (item.Kategoria == "opcionális")
                {
                    lbox_opcionalis.Items.Add(item);
                }
                else if (item.Kategoria == "sürgős")
                {
                    lbox_surgos.Items.Add(item);
                }
                else
                {
                    lbox_normal.Items.Add(item);
                }
            }
        }
    }
}
