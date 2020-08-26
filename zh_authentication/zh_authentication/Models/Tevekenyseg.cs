using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace zh_authentication.Models
{
    public class Tevekenyseg
    {
        [Key]
        public string Uid { get; set; }

        [StringLength(100)]
        public string Nev { get; set; }

        [StringLength(100)]
        public string Kategoria { get; set; }
    }
}
