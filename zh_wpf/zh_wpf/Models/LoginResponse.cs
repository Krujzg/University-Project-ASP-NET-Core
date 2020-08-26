using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zh_wpf.Models
{
    public class LoginResponse
    {
        public string Token { get; set; }

        public DateTime Expiration { get; set; }
    }
}
