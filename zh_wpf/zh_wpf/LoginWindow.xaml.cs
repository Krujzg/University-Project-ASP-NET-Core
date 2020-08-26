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
using System.Windows.Shapes;
using zh_wpf.Models;
using zh_wpf.Services;

namespace zh_wpf
{
    /// <summary>
    /// Interaction logic for LoginWindow.xaml
    /// </summary>
    public partial class LoginWindow : Window
    {
        RestService<LoginViewModel, string> loginservice;
        public LoginWindow()
        {
            InitializeComponent();
            loginservice = new RestService<LoginViewModel, string>(
                "https://localhost:44385", "/login"
                );
        }

        private async void Button_Click(object sender, RoutedEventArgs e)
        {
            var result = await loginservice.Post<LoginResponse>(new LoginViewModel()
            {
                Username = tb_username.Text,
                Password = tb_password.Password
            });
            

            string token = result.Token;

            MainWindow mw = new MainWindow(token);
            mw.ShowDialog();
        }
    }
}
